import React from 'react'
import './Header.css'
import {GiCutDiamond} from 'react-icons/gi'
import { Link } from 'react-router-dom'
import { FaUserSecret } from 'react-icons/fa'
import { useState } from 'react'
import {BsFillCartPlusFill} from 'react-icons/bs'

const Header = () => {
  const [menuDisplay, setMenuDisplay] = useState(false);
  const handleMenuDisplay = () => {
    setMenuDisplay(prev => !prev)
  }
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
          <Link to={'#'} className='link'>Home</Link>
          <Link to={'Menu'} className='link'>Menu</Link>
          <Link to={'About'} className='link'>About</Link>
          <Link to={'Contact'} className='link'>Contact</Link>
        </div>
        <div className="cart">
          <BsFillCartPlusFill className='Lcart' />
          <div className="N-items">0</div>
        </div>
        <FaUserSecret className='Lcart' onMouseEnter={handleMenuDisplay} />
        { menuDisplay && (<div className="menu" onMouseLeave={handleMenuDisplay}>
          <Link to={'New'} onClick={handleMenuDisplay}>New products</Link>
          <button><Link to={'Login'} onClick={handleMenuDisplay}>Login</Link></button>
        </div>)}
       </div> 
    </header>
  )
}

export default Header