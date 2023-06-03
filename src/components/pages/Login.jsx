import React from 'react'
import './pages.css'
import { useState } from 'react'
import {BiShow} from 'react-icons/bi'
import { BiHide } from 'react-icons/bi'
import signUpAnimation from '../../images/icons8-lock.gif'
import {Link} from 'react-router-dom'

const Login = () => {
  const [showPassword, setShowPassword] = useState(false)
 
  const [data, setData] = useState({
    email: "",
    pwd: "",
  })

  const passwordHandler = () => {
    setShowPassword(prev => !prev)
  }
    const handleOnchange = (e) => {
      const { name, value } = e.target
      setData((prev) => {
        return {
          ...prev,
          [name]: value
        }
      })
    }
    const handleSubmit = (e) => {
      e.preventDefault();
      const { email, pwd } = data
      if (email && pwd) {
        alert('Login Successful!')
      }
      else {
        alert('Fill in the Missing Fields')
      }
    }
    return (
      <div className='signUp'>
        <p><img src={signUpAnimation} alt="signUp" />Log In</p>
        <form onSubmit={handleSubmit}>
        
          <input type="email" name='email' id='email' placeholder='Enter Email' required value={data.email} onChange={handleOnchange} />

          <div className="pwd-cont">
            <input type={showPassword ? "text" : "password"} placeholder='Password' id='pwd' name='pwd' required style={{ letterSpacing: '6px' }} onChange={handleOnchange} value={data.pwd} />
            <small onClick={passwordHandler}>{showPassword ? <BiShow /> : <BiHide />}</small>
          </div>
          <button type='submit'>Log in</button>
        </form>
        <p>Don't have account? <Link className='to-login' to={"/signUp"}>Sign Up</Link></p>
      </div>
    )
  }


export default Login