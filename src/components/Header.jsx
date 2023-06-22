import React from 'react'
import './Header.css'
import {GiCutDiamond} from 'react-icons/gi'
import { Link } from 'react-router-dom'
import { FaUserSecret } from 'react-icons/fa'
import { useState } from 'react'
import {BsFillCartPlusFill} from 'react-icons/bs'
import { AiTwotoneHome } from 'react-icons/ai'
import { useSelector } from 'react-redux'

const Header = () => {
  const [activeNav,setActiveNav] = useState("#home")
  
  const userData = useSelector((state) => state.user)
  const cartItemsNumber = useSelector((state) => state.product.cartItem)
  return (
    <header>
      <Link to={'/'} className='link'>
        <GiCutDiamond className='logo' /> 
        <div className="contents">ALLANITY
        <small>Lets Shop</small>
        </div>
      </Link>
      <div className="tray">
        <div className="list">
          <Link id='home' to={'/'} style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"3px"}} onClick={()=>{setActiveNav("#home")}} className={activeNav==="#home" ? "activeLink" :'link'}><AiTwotoneHome/> Home</Link>
          <Link id='menu' to={"/Menu/648333d3c5014358591c1bae"} onClick={()=>{setActiveNav("#menu")}} className={activeNav==="#menu"? "activeLink" :'link'}>Products</Link>
          <Link to={'About'} id='about' onClick={()=>{setActiveNav("#about")}} className={activeNav==="#about"? "activeLink" :'link'}>About</Link>
          <Link to={'Contact'} id='contact' onClick={()=>{setActiveNav("#contact")}} className={activeNav==="#contact"? "activeLink" :'link'}>Contact</Link>
        </div>
        <Link to={"Cart"} className='cart-link'>
          <div className="cart">
          <BsFillCartPlusFill className='Lcart' />
          <div className="N-items">{cartItemsNumber.length}</div>
          </div>
        </Link>
        <FaUserSecret className='Lcart' />
       </div> 
    </header>
  )
}

export default Header