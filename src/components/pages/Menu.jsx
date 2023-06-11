import React, { useRef } from 'react'
import './pages.css'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import {IoIosPricetags} from 'react-icons/io'
import {BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill, BsFillCartPlusFill} from 'react-icons/bs'
import {MdLabelImportant} from 'react-icons/md'
import CardFeatures from '../cardFeatures'

const Menu = () => {
  const { filterby } = useParams()
  const productData = useSelector(state => state.product.productList);
  const productDisplay = productData.filter(el => el._id === filterby)[0];
  console.log(productDisplay)

  const slideProductRef = useRef()
  const nextProduct = () => {
    slideProductRef.current.scrollLeft += 250;
  }
  const prevProduct = () => {
    slideProductRef.current.scrollLeft -= 250;
  }
  const loadingArrayFeature = new Array(15).fill(null)
  const categoryList = [...new Set(productData.map(el => el.category))]
  console.log(categoryList)

  const cardFeaturesClothes = productData.filter(el => el.category === "trousers", [])

  return (
    <div>
      <div className="more-details">
        <div className="more-details-cont">
        <div className="more-img">
          <img src={productDisplay.image} alt="" />
        </div>
        <div className="more-contents">
          <h3>{productDisplay.name}</h3>
          <p>{productDisplay.category}</p>
          <p><IoIosPricetags /> {productDisplay.price}</p>
          <div className="button">
            <button><a>Add to Cart <BsFillCartPlusFill/></a></button>
          </div>
          <div className="button">
            <button><a>Order <MdLabelImportant/><MdLabelImportant/><MdLabelImportant/></a></button>
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
    </div>
  )
}

export default Menu