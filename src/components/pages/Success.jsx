import React from 'react'
import SuccessImg from '../../images/79952-successful.gif'
import './pages.css'
import Footer from './footer'

const Success = () => {
  return (
    <>
      <div className='Success'>
        <h3>Payment Successful! &#128165;&#128166; &#128175;
        </h3>

        <img src={SuccessImg} alt="" />
      </div>
      <Footer/>
    </>
    
  )
}

export default Success