import React from 'react'
import './pages/pages.css'
import { AiFillDelete, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { MdLabelImportant } from 'react-icons/md'

const CartProduct = ({id,name,category,image,qty,total,price,description}) => {
  return (
    <div className='cart-products'>
        <img src={image} alt="" />
      <div className="cart-img">
        <h3>{name}</h3>
        <p>{category}</p>
        <p><AiOutlineMinus className='less-button'/> {qty} <AiOutlinePlus className='add-button'/></p>
        <p>Price: {price}</p>
        <div className="order">
          <div className="button">
            <button><a>Remove <AiFillDelete/></a></button>
          </div>
          <div className="button">
            <button><a>Order <MdLabelImportant/><MdLabelImportant/><MdLabelImportant/></a></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartProduct