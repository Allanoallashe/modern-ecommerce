import React from 'react'
import './pages/pages.css'
import { useSelector } from 'react-redux'
import CartProduct from './CartProduct'

const Cart = () => {
  const productCartItems = useSelector((state) => state.product.cartItem)
  console.log(productCartItems)
  return (
    <div className='Cart'>
      <h2>Cart Items</h2>
      <div className="">
        {
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
          })
        }
      </div>
    </div>
  )
}

export default Cart