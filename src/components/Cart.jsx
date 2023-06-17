import React from 'react'
import './pages/pages.css'
import { useSelector } from 'react-redux'
import CartProduct from './CartProduct'
import Footer from './pages/footer'

const Cart = () => {
  const productCartItems = useSelector((state) => state.product.cartItem)
  console.log(productCartItems)
  return (
    <div className='Cart'>
      <h2>Cart Items</h2>
      <div className="Cart-Items">
        {productCartItems?
          productCartItems.map(el => {
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
          }) :
          <h3>Your Cart Is Empty</h3>
        }
        </div>
     
      <Footer/>
    </div>
  )
}

export default Cart