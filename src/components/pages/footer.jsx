import React from 'react'
import './pages.css'
import { Link } from 'react-router-dom'
import {BsApple, BsFacebook, BsGooglePlay} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'
import {FaInstagramSquare} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'
import { FaTelegram } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="newsletter">
        <div className="news-details">
          <h4>Sign Up For News</h4>
          <p>Get E-mail updates about our latest products and <span>Special Offers.</span></p>
        </div>
        <form action="">
            <input type="email" placeholder='Enter Your email address' />
            <button type='submit'>Sign Up</button>
        </form>
      </div>
      <div className="footer-about">
        <div className="contact">
          <h5>Contact</h5>
          <p><strong>Address</strong> Eldoret Kenya</p>
          <p><strong>Phone</strong> +254738923427</p>
          <p><strong>Hours</strong> 6:00am - 6:00pm</p>
        </div>
        <div className="about">
          <h5>About</h5>
          <Link to={""} className='footer-links'>About US</Link>
          <Link to={""} className='footer-links'>Delivery Methods</Link>
          <Link to={""} className='footer-links'>Privacy Policy</Link>
          <Link to={""} className='footer-links'>Terms & Conditions</Link>
          <Link to={""} className='footer-links'>Contact Us</Link>
        </div>
        <div className="account">
          <h5>My Account</h5>
          <Link to={""} className='footer-links'>Sign Up/In</Link>
          <Link to={""} className='footer-links'>View Cart</Link>
          <Link to={""} className='footer-links'>My Wishlist</Link>
          <Link to={""} className='footer-links'>Track Order</Link>
          <Link to={""} className='footer-links'>Help</Link>
        </div>
        <div className="Access">
          <h5>Install App</h5>
          <div className="mobile-app">
            <p>Google Play <BsGooglePlay/></p>
            <p>App Store <BsApple/></p>
          </div>
          <h5>Payments</h5>
          <div className="payments"></div>
        </div>
      </div>
      <div className="social-media">
        <BsFacebook/>
        <IoLogoWhatsapp/>
        <FaInstagramSquare/>
        <FaLinkedin/>
        <FaTelegram/>
      </div>
      <div className="copyright">
        <p><strong>&copy;</strong> @AllanoallasheDev.com-2023. All rights Reserved.</p> 
      </div>
    </div>
  )
}

export default Footer