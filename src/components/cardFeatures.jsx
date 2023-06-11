import React from 'react'
import './pages/home.css'
import { BsFillCartPlusFill } from 'react-icons/bs'
import {IoIosPricetags} from 'react-icons/io'
import { Link } from 'react-router-dom'


const CardFeatures = ({image,name,price,category,loading,id}) => {
  return (
    <div className="card-container">
      {image ?
        <>
          <Link to={`Menu/${id}`} >
            <img src={image} alt="" />
          </Link>
            <p>{name}</p>
            <p><IoIosPricetags/> {price}</p>
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