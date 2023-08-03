import React, { useRef, useState } from 'react'
import './pages.css'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {IoIosPricetags} from 'react-icons/io'
import {BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill, BsFillCartPlusFill} from 'react-icons/bs'
import {MdLabelImportant} from 'react-icons/md'
import CardFeatures from '../cardFeatures'
import { addCartItem } from '../../redux/productSlice'
import Footer from './footer'
import anime from 'animejs'

const Menu = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { filterby } = useParams()
  const productData = useSelector(state => state.product.productList);
  const productDisplay = productData.filter(el => el._id === filterby)[0];

  const slideProductRef = useRef()
  const nextProduct = () => {
    slideProductRef.current.scrollLeft += 250;
  }
  const prevProduct = () => {
    slideProductRef.current.scrollLeft -= 250;
  }
  const loadingArrayFeature = new Array(15).fill(null)
  const categoryList = [...new Set(productData.map(el => el.category))]

  const cardFeaturesClothes = productData.filter(el => el.category === "trousers", [])

    const handleAddTocart = (e) => {
    dispatch(addCartItem(
      productDisplay
    ))
  }

  const handleOrder = () => {
    dispatch(addCartItem(productDisplay))
    navigate("/cart")
  }

  const [isAnimated, setIsAnimated] = useState(false)
  const itemRef = useRef(null)
  const copyRef = useRef(null)


  const flyProduct = () => {
    const item = itemRef.current
    const itemCopy = item.cloneNode(true)

    const boundingRect = item.getBoundingClientRect()

    itemCopy.style.position = 'fixed';
    itemCopy.style.left = `${boundingRect.left}px`;
    itemCopy.style.top = `${boundingRect.top}px`;

    itemCopy.style.opacity = 1
    itemCopy.style.zIndex = 1000
    itemCopy.style.borderRadius = '10px'
    itemCopy.style.backdropFilter = 'blur(5px)'
    document.body.appendChild(itemCopy);
    const targetX = window.innerWidth - item.offsetWidth + 30
    const targetY = -70
    setIsAnimated(true)
      anime({
        targets: itemCopy,
        translateX: targetX - boundingRect.left,
        translateY: targetY - boundingRect.top -50,
        opacity: 0.75,
        rotate: '1turn',
        borderRadius: '20px',
        scale: 0.25,
        duration: 2000,
        easing: 'easeOutQuad',
        complete: () => {
          setTimeout(() => {
            anime({
              targets: itemCopy,
              opacity: 0,
              duration: 500,
              scale: 0.1,
              rotate:'1turn',
              borderRadius:'50%',
              easing: 'easeOutQuad',
              complete: () => {
                document.body.removeChild(itemCopy);
                setIsAnimated(false)
              },
            })
          },1000)
        },
      })
    
  }

  return (
    <div>
      <div className="more-details">
        <div className="more-details-cont">
        <div className="more-img" style={{position:'relative'}}>
            {isAnimated && (<img
              style={{position:'absolute'}}
              ref={copyRef}
              src={productDisplay.image}
              alt="" />)}
          <img ref={itemRef} src={productDisplay.image} alt="" />
        </div>
        <div className="more-contents">
          <h3>{productDisplay.name}</h3>
          <p>{productDisplay.category}</p>
          <p><IoIosPricetags /> {productDisplay.price}</p>
          <div className="button">
              <button onClick={() => {
                handleAddTocart()
                flyProduct()
              }}>
                <a>
                  Add to Cart <BsFillCartPlusFill />
                </a>
              </button>
          </div>
          <div className="button">
            <button onClick={handleOrder}><a>Order <MdLabelImportant/><MdLabelImportant/><MdLabelImportant/></a></button>
          </div>
          <p>Description: {productDisplay.description}</p>
        </div>
        
        </div>
      </div>
      
      <div className="trends">
        <h2>Related Products</h2>
        <BsFillArrowLeftCircleFill onClick={prevProduct}  className='arrow-left' />
        <BsFillArrowRightCircleFill onClick={nextProduct} className='arrow-right' />
      </div>
      <div className="card-title" ref={slideProductRef}>
        
        {
         cardFeaturesClothes[0] ? cardFeaturesClothes.map(el => {
            return(
              < CardFeatures
                id={el._id}
                key={el._id}
                image={el.image}
                name={el.name}
                price={el.price}
                category={el.category}
              />
        
           )
         })
          :
          loadingArrayFeature.map((el,index) => {
            return(
            <CardFeatures
              key={index}
              loading={"loading..."}
            />
          )
        })
        }
        
      </div>
      <Footer/>
    </div>
  )
}

export default Menu