import React, { useEffect } from 'react';
import Header from './components/Header.jsx';
import { Outlet } from 'react-router-dom';
import './components/Header.css'
import toast, { Toaster } from 'react-hot-toast';
import { setDataProduct } from './redux/productSlice.js';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch()
  const productData = useSelector((state) => state.product)
 
  useEffect(() => {
    (async() => {
      const res = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/product`)
      const resData = await res.json()
      dispatch(setDataProduct(resData))
    })()
  }, [])
  return (
    <>
      <Toaster/>
    <div>
      <Header />
      <div className='outlet'>
        <Outlet />
      </div>
      </div>
    </>
  );
}

export default App;
