import React from 'react'

const CartProduct = ({id,name,category,image,qty,total,price,description}) => {
  return (
    <div>
      <div className="cart-img">
        <img src={image} alt="" />
      </div>
      <h3>{name}</h3>
      <p>{category}</p>
      <p>Quantity: {qty}</p>
      <p>Price: {price}</p>
      <p>Description: {description}</p>
    </div>
  )
}

export default CartProduct