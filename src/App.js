import React, { useEffect, useState } from 'react';
import Header from './components/Header.jsx';
import { Link, Outlet } from 'react-router-dom';
import './components/Header.css'
import "./index.css"
import  { Toaster, toast } from 'react-hot-toast';
import { setDataProduct } from './redux/productSlice.js';
import { useDispatch, useSelector } from 'react-redux';
import { ImMenu3 } from 'react-icons/im';
import { AiOutlineCloseCircle, AiTwotoneHome } from 'react-icons/ai';
import { logoutRedux } from './redux/userSlice.js';
import { FaUserSecret } from 'react-icons/fa';

function App() {
  const dispatch = useDispatch()
  useSelector((state) => state.product)
  const userData = useSelector((state) => state.user)
  
  const [listDisplay, setListDisplay] = useState(false)
  const [menuDisplay, setMenuDisplay] = useState(false);

   const handleListDisplay = () => {
    setListDisplay((prev => !prev),[1500])
   }
   const handleMenuDisplay = () => {
    setMenuDisplay((prev => !prev),{style:{transition:'All ease-in-out 0.25s'}})
   }
  const handleLogout = () => {
    dispatch(logoutRedux())
    toast.success('You Signed Out Successfully!', {
      duration: 2000,
      style:{color:'green'}
    })
  }
  
 
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
        <main>
        <Header />
        <div className="humberger">
        <ImMenu3 className='imMenu' onClick={handleListDisplay} />
            {listDisplay && (<div className="li-menu">
              <AiOutlineCloseCircle className='close-menu' onClick={handleListDisplay} />
              <Link to={'/'} className='li' onClick={handleListDisplay}><AiTwotoneHome /> Home</Link>
              <Link to={"/Menu/648333d3c5014358591c1bae"} className='li' onClick={handleListDisplay}>Products</Link>
              <Link to={'About'} className='li' onClick={handleListDisplay}>About</Link>
              <Link to={'Contact'} className='li' onClick={handleListDisplay}>Contact</Link>
            </div>)}
          </div>
          <div className='the_profile'>
            {userData.image ? <img src={userData.image} onClick={handleMenuDisplay} className='profile-image' alt='profile' /> : <FaUserSecret className='Pcart' onClick={handleMenuDisplay} />}
          </div>
          {menuDisplay && (<div className="menu" onMouseLeave={handleMenuDisplay}>
          {
            userData.email === process.env.REACT_APP_ADMIN_EMAIL && <Link to={'New'} onClick={handleMenuDisplay}>Add New products</Link>
          }
          {userData.image? <button><Link onClick={handleLogout}>Log Out ({userData.name})</Link></button> : <button><Link to={'Login'} onClick={handleMenuDisplay}>Login</Link></button>}
        </div>)}
        </main>
        <div className='outlet'>
          <Outlet/>
        </div>
      </div>
    </>
  );
}

export default App;
