import React from 'react'
import './Header.css'
import {GiCutDiamond} from 'react-icons/gi'
import { Link } from 'react-router-dom'
import { FaUserSecret } from 'react-icons/fa'
import { useState } from 'react'
import {BsFillCartPlusFill} from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { logoutRedux } from '../redux/userSlice'
import { toast } from 'react-hot-toast'

const Header = () => {
  const [menuDisplay, setMenuDisplay] = useState(false);
  const userData = useSelector((state) => state.user)
  console.log(userData.email)
  const dispatch = useDispatch()
  const handleLogout = () => {
    dispatch(logoutRedux())
    toast('Signed Out Successfully')
  }
  const handleMenuDisplay = () => {
    setMenuDisplay(prev => !prev)
  }
  console.log(process.env.REACT_APP_ADMIN_EMAIL)
  return (
    <header>
      <Link to={'#'} className='link'>
        <GiCutDiamond className='logo' /> 
        <div className="contents">ALLANITY
        <small>Lets Shop</small>
        </div>
      </Link>
      <div className="tray">
        <div className="list">
          <Link to={'/'} className='link'>Home</Link>
          <Link to={'Menu'} className='link'>Menu</Link>
          <Link to={'About'} className='link'>About</Link>
          <Link to={'Contact'} className='link'>Contact</Link>
        </div>
        <div className="cart">
          <BsFillCartPlusFill className='Lcart' />
          <div className="N-items">0</div>
        </div>
        {userData.image ? <img src={userData.image} onMouseEnter={handleMenuDisplay}  className='profile-img' alt='profile'/> : <FaUserSecret className='Lcart' onMouseEnter={handleMenuDisplay} />}

        {menuDisplay && (<div className="menu" onMouseLeave={handleMenuDisplay}>
          {
            userData.email === process.env.REACT_APP_ADMIN_EMAIL && <Link to={'New'} onClick={handleMenuDisplay}>New products</Link>
          }
          {userData.image? <button><Link onClick={handleLogout}>Log Out ({userData.name})</Link></button> : <button><Link to={'Login'} onClick={handleMenuDisplay}>Login</Link></button>}
        </div>)}
       </div> 
    </header>
  )
}

export default Header