import React from 'react'
import './pages.css'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import {IoIosPricetags} from 'react-icons/io'
import {BsFillCartPlusFill} from 'react-icons/bs'
import {MdLabelImportant} from 'react-icons/md'

const Menu = () => {
  const { filterby } = useParams()
  const productData = useSelector(state => state.product.productList);
  const productDisplay = productData.filter(el => el._id === filterby)[0];
  console.log(productDisplay)
  return (
    <div>
      <div className="more-details">
        <div className="more-img">
          <img src={productDisplay.image} alt="" />
        </div>
        <div className="more-contents">
          <h3>{productDisplay.name}</h3>
          <p>{productDisplay.category}</p>
          <p><IoIosPricetags /> {productDisplay.price}</p>
          <p>Description:</p>
          <p>{productDisplay.description}</p>
        </div>
        <div className="button">
          <button><a>Add to Cart <BsFillCartPlusFill/></a></button>
        </div>
        <div className="button">
          <button><a>Order <MdLabelImportant/><MdLabelImportant/><MdLabelImportant/></a></button>
        </div>
      </div>
    </div>
  )
}

export default Menu