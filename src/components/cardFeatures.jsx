import React from 'react'
import './pages/home.css'
import {BsFillCartPlusFill} from 'react-icons/bs'


const CardFeatures = ({image,name,price,category,loading}) => {
  return (
    <div className="card-container">
      {image ?
        <>
        <img src={image} alt="" />
        <p>{name}</p>
        <p>{price}</p>
        <p>{category}</p>
        <div className="button">
          <button><a>Add to Cart <BsFillCartPlusFill/></a></button>
          </div>
        </>
        :
        <p>{loading}</p>
      }
      </div>
  )
}

export default CardFeatures