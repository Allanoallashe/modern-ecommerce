import React from 'react'
import './pages/pages.css'
import { useSelector } from 'react-redux'
import CartProduct from './CartProduct'
import Footer from './pages/footer'
import { IoIosPricetags } from 'react-icons/io'
import { MdLabelImportant } from 'react-icons/md'
import EmptyCart from '../images/empty-cart.gif'
import { toast } from 'react-hot-toast'
import {loadStripe} from '@stripe/stripe-js'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const productCartItems = useSelector((state) => state.product.cartItem)

  

  const user = useSelector(state => state.user)
  const navigate = useNavigate()
  

  const totalPrice = productCartItems.reduce((acc, curr) => acc + parseInt(curr.total), 0)
  const totalItems = productCartItems.reduce((acc, curr) => acc + parseInt(curr.qty), 0)
   
  
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
      
      toast.loading("Redirecting to Payment gateway...", {
        duration: 5000,
        style: { color: 'blue' },
        iconTheme: { primary: 'blue' }
      })
      stripePromise.redirectToCheckout({sessionId : data})
    }
    else {
       toast.error('You need to Login First!', {
          duration: 2000,
          style:{color:'red'}
        })
      setTimeout(() => {
        navigate("/login")
      }, 2000)
      
    }
  }

  return (
    <>
    
    <div className='Cart'>
        <h2>Cart Items</h2>
        {productCartItems[0] ?
          <div className="Cart-Items">
        
            {productCartItems.map(el => {
              return (
                <CartProduct
                  key={el._id}
                  id={el._id}
                  name={el.name}
                  image={el.image}
                  category={el.category}
                  qty={el.qty}
                  total={el.total}
                  price={el.price}
                  description={el.description}
                />
              )
            })}
            
          </div>
          : <div className='cart-empty'><h4>Your Cart Is Empty &#128122;&#128542;</h4>
            <img src={EmptyCart} alt=''/>
          </div>
        }{productCartItems[0] && (
          <div className="grandTotal">
            <div className="grand-box">
              <h4>Cash Out</h4>
              <div className="stats">
                <p><strong>Total Items:</strong> {totalItems}</p>
                <p><strong>Total Price:</strong> <IoIosPricetags /> {totalPrice}</p>
              </div>
              <div className="button">
                <button className='payment' onClick={handlePayment}><a>Order <MdLabelImportant /><MdLabelImportant /><MdLabelImportant /></a></button>
              </div>
            </div>
          </div>
        )}
        
        <Footer/>
      </div>   
    </>
  )
}

export default Cart