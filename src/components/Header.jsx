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
import { ImMenu3 } from 'react-icons/im'
import {AiOutlineCloseCircle,AiTwotoneHome} from 'react-icons/ai'

const Header = () => {
  const [menuDisplay, setMenuDisplay] = useState(false);
  const [listDisplay, setListDisplay] = useState(false)
  
  const userData = useSelector((state) => state.user)
  const dispatch = useDispatch()
  const handleLogout = () => {
    dispatch(logoutRedux())
    toast('Signed Out Successfully')
  }
  
  const handleListDisplay = () => {
    setListDisplay((prev => !prev),500)
  }

  const handleMenuDisplay = () => {
    setMenuDisplay(prev => !prev)
  }

 const cartItemsNumber = useSelector((state)=>state.product.cartItem)
  return (
    <header>
      <Link to={'/'} className='link'>
        <GiCutDiamond className='logo' /> 
        <div className="contents">ALLANITY
        <small>Lets Shop</small>
        </div>
      </Link>
      <div className="humberger">
        <ImMenu3 className='imMenu' onClick={handleListDisplay} />
       {listDisplay && (<div className="li-menu">
          <AiOutlineCloseCircle className='close-menu' onClick={handleListDisplay}/>
          <Link to={'/'} className='li' onClick={handleListDisplay}><AiTwotoneHome/> Home</Link>
          <Link to={"/Menu/648333d3c5014358591c1bae"} className='li' onClick={handleListDisplay}>Products</Link>
          <Link to={'About'} className='li' onClick={handleListDisplay}>About</Link>
          <Link to={'Contact'} className='li' onClick={handleListDisplay}>Contact</Link>
        </div>)}

      </div>
      <div className="tray">
        <div className="list">
          <Link to={'/'} style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"3px"}} className='link'><AiTwotoneHome/> Home</Link>
          <Link to={"/Menu/648333d3c5014358591c1bae"} className='link'>Products</Link>
          <Link to={'About'} className='link'>About</Link>
          <Link to={'Contact'} className='link'>Contact</Link>
        </div>
        <Link to={"Cart"} className='cart-link'>
          <div className="cart">
          <BsFillCartPlusFill className='Lcart' />
          <div className="N-items">{cartItemsNumber.length}</div>
          </div>
        </Link>
        {userData.image ? <img src={userData.image} onMouseEnter={handleMenuDisplay}  className='profile-img' alt='profile'/> : <FaUserSecret className='Lcart' onClick={handleMenuDisplay} />}

        {menuDisplay && (<div className="menu" onMouseLeave={handleMenuDisplay}>
          {
            userData.email === process.env.REACT_APP_ADMIN_EMAIL && <Link to={'New'} onClick={handleMenuDisplay}>Add New products</Link>
          }
          {userData.image? <button><Link onClick={handleLogout}>Log Out ({userData.name})</Link></button> : <button><Link to={'Login'} onClick={handleMenuDisplay}>Login</Link></button>}
        </div>)}
       </div> 
    </header>
  )
}

export default Header