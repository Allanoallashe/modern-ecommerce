import React from 'react'
import './pages/home.css'
import { BsFillCartPlusFill } from 'react-icons/bs'
import {IoIosPricetags} from 'react-icons/io'
import { Link } from 'react-router-dom'
import { addCartItem } from '../redux/productSlice'
import {useDispatch} from 'react-redux'
import { toast } from 'react-hot-toast'


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

  return (
    <div className="card-container">
      {image ?
        <>
          <Link to={`/Menu/${id}`} onClick={() =>window.scrollTo({top:"0", behavior:"smooth"})} >
            <img src={image} alt="" />
          </Link>
            <p>{name}</p>
            <p><IoIosPricetags/> {price}</p>
            <p>{category}</p>
            <div className="button">
              <button onClick={handleAddTocart}><a>Add to Cart <BsFillCartPlusFill/></a></button>
            </div>
        </>
        :
        <p>{loading}</p>
      }
      </div>
  )
}

export default CardFeatures