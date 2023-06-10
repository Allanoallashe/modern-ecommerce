import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name:"",
  email:"",
  image:"",
  _id:"",
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginRedux: (state, action) => {
      console.log(action.payload.data)
      state._id = action.payload.data._id
      state.email = action.payload.data.email
      state.image = action.payload.data.image
      state.name = action.payload.data.name
    },
    logoutRedux: (state, action) => {
      state._id = ""
      state.email = ""
      state.image =""
      state.name =""    }
  }
})
 
export default userSlice.reducer
export const {loginRedux ,logoutRedux} = userSlice.actions