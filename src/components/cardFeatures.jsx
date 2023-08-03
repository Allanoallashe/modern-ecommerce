import React, { useRef, useState } from 'react'
import './pages/home.css'
import { BsFillCartPlusFill } from 'react-icons/bs'
import {IoIosPricetags} from 'react-icons/io'
import { Link } from 'react-router-dom'
import { addCartItem } from '../redux/productSlice'
import { useDispatch } from 'react-redux'
import anime from 'animejs'


const CardFeatures = ({ image, name, price, category, loading, id}) => {
  
  

  const dispatch = useDispatch()
  
  const handleAddTocart = (e) => {
    dispatch(addCartItem({
      _id: id,
      name: name,
      image: image,
      price: price,
      category: category,
    }))
    
  
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
    document.body.appendChild(itemCopy);
    const targetX = window.innerWidth - item.offsetWidth - 20
    const targetY = -20
    setIsAnimated(true)
      anime({
        targets: itemCopy,
        translateX: targetX - boundingRect.left,
        translateY: targetY - boundingRect.top,
        opacity: 0,
        duration: 2000,
        easing: 'easeOutQuad',
        complete: () => {
          document.body.removeChild(itemCopy);
          setIsAnimated(false)
        },
      })
    
  }
  
 


  return (
    <div className="card-container"
    >
      {image ?
        <><div style={{position:'relative',}}>
          <Link to={`/Menu/${id}`} onClick={() => window.scrollTo({ top: "0", behavior: "smooth" })}
          style={{position:'relative',}}
          >
            {isAnimated && (
              <img
                ref={copyRef}
                style={{
                  position: 'absolute',
                  zIndex: 500,
                }}
                src={image} alt="cartImage" />)}
              
              <img ref={itemRef} src={image} alt="cartImage" />
            
          </Link>
          </div>
            <p>{name}</p>
            <p><IoIosPricetags/> {price}</p>
            <p>{category}</p>
            <div className="button">
            <button onClick={() => {
              handleAddTocart();
              flyProduct()
            }}>
              <a>
                  Add to Cart <BsFillCartPlusFill />
              </a>
            </button>
            </div>
        </>
        :
        <p>{loading}</p>
      }
      </div>
  )
}

export default CardFeatures