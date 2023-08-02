import React, { useState } from 'react'
import './pages.css'
import {BiShow,BiCloudUpload} from 'react-icons/bi'
import { BiHide } from 'react-icons/bi'
import profile from '../../images/profile.gif'
import signUpAnimation from '../../images/icons8-lock.gif'
import { Link, useNavigate } from 'react-router-dom'
import { ImagetoBase64 } from '../../Utility/ImagetoBase64'
import {toast} from 'react-hot-toast'
import Footer from './footer'

const SignUp = () => {

  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [data, setData] = useState({
    name: "",
    email: "",
    pwd: "",
    cPwd: "",
    image:"",
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

  const handleUploadProfile = async(e) => {
    const data = await ImagetoBase64(e.target.files[0])
     
    setData((prev) => {
      return {
        ...prev,
        image : data
      }
    })
    }
  
  const PleaseWait = () => {
    toast.loading('Please Wait', {
      duration: 2000,
      style: { color: 'green' },
      iconTheme:{primary:'green'}
      })
    }
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const {name,email,pwd,cPwd} = data;
    if (name && email && pwd && cPwd) {
      if (pwd === cPwd) {
        const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/signUp`,{
          method: "POST",
          headers: {
            "Content-Type" : "application/json",
          },
          body: JSON.stringify(data),
            })

        const dataRes = await fetchData.json()
        toast.success(dataRes.message,{duration:1500})
        if (dataRes.alert) {
          navigate("/login")
        }
        
        
      }
      else {
        toast.error('Passwords Are Not Matching',{duration:1500,style:{color:'red'}})
      }
    }
    else {
      toast.error('Fill in the Missing Details!', {
        duration: 1500,
        style: { color: 'red' }
      })
    }
  }



  return (
    <>
    <div className='signUp'>
      <div className="upload">
         
        <img src={data.image ? data.image : profile} alt='profile' className='profile'/>
        
        <label htmlFor='profileImage'><h5><BiCloudUpload/></h5>
          <input type={'file'} id="profileImage" accept='image/*' onChange={handleUploadProfile}/>
        </label>
      </div>
    <p><img src={signUpAnimation} alt="signUp"className='img' /> Sign Up</p>
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
        <button onClick={PleaseWait} type='submit'>Sign Up</button>
      </form>
      <p>Already have account? <Link className='to-login' to={"/login"}>Login</Link></p>
      </div>
      <Footer/>
    </>
  )
}

export default SignUp