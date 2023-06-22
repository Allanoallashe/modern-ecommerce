import React from 'react'
import './pages/pages.css'
import {useDispatch, useSelector} from 'react-redux'
import { AiFillDelete, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { MdLabelImportant } from 'react-icons/md'
import { deleteCartItem,increaseQty,decreaseQty } from '../redux/productSlice'
import { toast } from 'react-hot-toast'
import { loadStripe } from '@stripe/stripe-js'
import { useNavigate } from 'react-router-dom'

const CartProduct = ({ id, name, category, image, qty, total, price, description }) => {
  
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  const navigate = useNavigate()

  const productCartItems = useSelector((state) => state.product.cartItem)

  const handlePayment = async () => {
    if(user.email){
      const stripePromise = await loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY)
      const res = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/checkout-payments`, {
        method: "POST",
        headers: {
          "content-type" : "application/json"
        },
        body : JSON.stringify(productCartItems)
      })
      if (res.statusCode === 500)return;
      const data = await res.json()
      console.log(data)
      
      toast("Redirecting to Payment gateway...")
      stripePromise.redirectToCheckout({sessionId : data})
    } else {
      toast("You need to Log In First!")
      setTimeout(() => {
        navigate("/login")
      },2000)
      }
  }

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
            <button onClick={handlePayment} ><a>Order <MdLabelImportant/><MdLabelImportant/><MdLabelImportant/></a></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartProduct