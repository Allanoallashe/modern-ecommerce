import React, { useState } from 'react'
import './pages.css'
import {BiShow} from 'react-icons/bi'
import { BiHide } from 'react-icons/bi'
import signUpAnimation from '../../images/icons8-lock.gif'
import {Link} from 'react-router-dom'

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [data, setData] = useState({
    name: "",
    email: "",
    pwd: "",
    cPwd: "",
  })

  const passwordHandler = () => {
    setShowPassword(prev => !prev)
  }
  const passwordConfirmationHandler = () => {
    setShowConfirmPassword(prev => !prev)
  }
  const handleOnchange = (e) => {
    const { name, value } = e.target
    setData((prev) => {
      return {
        ...prev,
        [name] : value
      }
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const {name,email,pwd,cPwd} = data
    if (name && email && pwd && cPwd) {
      if (pwd === cPwd) {
        alert('Login Successful')
      }
      else {
        alert('Password Not Matching')
      }
    }
    else {
      alert('Fill in the Missing Fields')
    }
  }

  return (
    <div className='signUp'>
    <p><img src={signUpAnimation} alt="signUp" /> Sign Up</p>
    <form onSubmit={handleSubmit}>
        <input type="text" id='name' name='name' placeholder='Enter UserName' required value={data.name} onChange={handleOnchange} />
        
        <input type="email" name='email' id='email' placeholder='Enter Email' required value={data.email} onChange={handleOnchange}/>

        <div className="pwd-cont">
          <input type={showPassword ? "text" : "password"} placeholder='Password' id='pwd' name='pwd' required  style={{letterSpacing:'6px'}} onChange={handleOnchange} value={data.pwd}/>
          <small onClick={passwordHandler}>{ showPassword ? <BiShow /> : <BiHide/> }</small>
        </div>
        <div className="pwd-cont">
          <input type={showConfirmPassword ? "text" : "password"} placeholder='Confirm Password' id='cPwd' name='cPwd' required  style={{letterSpacing:'6px'}} value={data.cPwd} onChange={handleOnchange}/>
          <small onClick={passwordConfirmationHandler}>{ showConfirmPassword ? <BiShow /> : <BiHide/> }</small>
        </div>
        <button type='submit'>Sign Up</button>
      </form>
      <p>Already have account? <Link className='to-login' to={"/login"}>Login</Link></p>
    </div>
  )
}

export default SignUp