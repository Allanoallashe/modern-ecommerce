import React from 'react'
import './pages.css'
import {BiShow} from 'react-icons/bi'
import {BiHide} from 'react-icons/bi'

const SignUp = () => {
  return (
    <div className='signUp'>
    <p>Sign Up</p>
    <form action="#">
        <input type="text" id='name' name='name' placeholder='Enter UserName' required /> 
        <input type="email" name='email' id='email' placeholder='Enter Email' required />
        <div className="pwd-cont">
          <input type="password" placeholder='Password' id='pwd' name='pwd' required />
          <small><BiHide/><BiShow className='show'/></small>
        </div>
        <div className="pwd-cont">
          <input type="password" id='cPwd' name='cPwd' placeholder='Confirm Password' />
          <small><BiHide/><BiShow className='show'/></small>
        </div>
      </form>
    </div>
  )
}

export default SignUp