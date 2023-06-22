import React from 'react'
import CancelImg from '../../images/66761-canceled-state-illustration.gif'
import './pages.css'
import "../../index.css"
import Footer from "./footer"

const Cancel = () => {
  return (
    <>
      <div className='Cancel' style={{width:"150%"}}>
          <h3>Payment Cancelled! &#128122;&#128542;
          </h3>

          <img src={CancelImg} alt="" />
      </div>
      <Footer style={{width:"150%"}} />
    </>
  )
}

export default Cancel