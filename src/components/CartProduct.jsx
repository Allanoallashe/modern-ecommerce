import React from 'react'
import './pages/pages.css'
import {useDispatch} from 'react-redux'
import { AiFillDelete, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { MdLabelImportant } from 'react-icons/md'
import { deleteCartItem,increaseQty,decreaseQty } from '../redux/productSlice'

const CartProduct = ({ id, name, category, image, qty, total, price, description }) => {
  
  const dispatch = useDispatch()

  return (
    <div className='cart-products'>
        <img src={image} alt="" />
      <div className="cart-img">
        <h3>{name}</h3>
        <p>{category}</p>
        <p>Price: {price}</p>
        <p><AiOutlineMinus onClick={()=>dispatch(decreaseQty(id))}  className='less-button'/> {qty} <AiOutlinePlus onClick={()=>dispatch(increaseQty(id))} className='add-button'/></p>
        <p className='total'>Total: {total}</p>
        <div className="order">
          <div className="button">
            <button onClick={()=>dispatch(deleteCartItem(id))}><a>Remove <AiFillDelete/></a></button>
          </div>
          <div className="button payment">
            <button><a>Order <MdLabelImportant/><MdLabelImportant/><MdLabelImportant/></a></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartProduct