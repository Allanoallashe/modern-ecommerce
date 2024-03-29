
import { createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-hot-toast'

const items = localStorage.getItem("cartItem") !== null ? JSON.parse(localStorage.getItem("cartItem")): []; 


const initialState = {
  productList: [],
  cartItem : items
}
export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setDataProduct: (state,action) => {
      state.productList = [...action.payload]
    }, 
     
    addCartItem: (state, action) => {
      const check = state.cartItem.some(el => el._id === action.payload._id)
      if (check) {
        setTimeout(() => {
          toast.error("Item Already Added to Cart", {
          duration: 1500,
          style:{color:'red'}
        })
        },3800)
        
      }
      else {
        const total = action.payload.price
        state.cartItem = [...state.cartItem, { ...action.payload, qty: 1, total: total }]
        setTimeout(() => {
          toast.success("Item Added Successfully", {
          duration: 1500,
          style:{color:'green'}
        })
        },3800)
        
      }
      localStorage.setItem("cartItem", JSON.stringify(state.cartItem.map(items=>items)))
    },

    deleteCartItem: (state, action) => {
      toast.success('Deleted Successfully', {
        duration: 1500,
        style:{color:'green'}
      })
      const index = state.cartItem.findIndex((el) => el._id === action.payload)
      state.cartItem.splice(index, 1)
      localStorage.setItem("cartItem", JSON.stringify(state.cartItem.map(items=>items)))
    },
    increaseQty: (state, action) => {
      const index = state.cartItem.findIndex((el) => el._id === action.payload)
      let qty = state.cartItem[index].qty 
      state.cartItem[index].qty = ++qty

      const qtyIncrease = qty
      state.cartItem[index].qty = qtyIncrease
      const price = state.cartItem[index].price
      const total = price*qtyIncrease
      state.cartItem[index].total = total

      localStorage.setItem("cartItem", JSON.stringify(state.cartItem.map(items=>items)))
    },
    decreaseQty: (state, action) => {
      const index = state.cartItem.findIndex((el) => el._id === action.payload)
      let qty = state.cartItem[index].qty 
      if (qty > 1) {
        state.cartItem[index].qty = --qty
        const qtyDecrease = qty
        state.cartItem[index].qty = qtyDecrease
        const price = state.cartItem[index].price
        const total = price*qtyDecrease
        state.cartItem[index].total = total

        localStorage.setItem("cartItem", JSON.stringify(state.cartItem.map(items=>items)))
      }
    }
  }
})
 
export const { setDataProduct,addCartItem,deleteCartItem,increaseQty,decreaseQty } = productSlice.actions
export default productSlice.reducer