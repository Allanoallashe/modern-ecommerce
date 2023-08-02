import React from 'react'
import './pages.css'
import { useState } from 'react'
import {BiShow} from 'react-icons/bi'
import { BiHide } from 'react-icons/bi'
import signUpAnimation from '../../images/icons8-lock.gif'
import { Link} from 'react-router-dom'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { loginRedux } from '../../redux/userSlice'
import Footer from './footer'

const Login = () => {
  const [showPassword, setShowPassword] = useState(false)
 
  const [data, setData] = useState({
    email: "",
    pwd: "",
  })
  
  const navigate = useNavigate()

  const userData = useSelector(state => state)
  const dispatch = useDispatch()

  const PleaseWait = () => {
    toast.loading('Please Wait!', {
      duration: 2000,
      style: {
        color:'green',
      },
      iconTheme:{primary:'green'}
    })
  }
  
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
    const handleSubmit = async (e) => {
      e.preventDefault();
      const { email, pwd } = data
      if (email && pwd) {
         const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/login`,{
          method: "POST",
          headers: {
            "Content-Type" : "application/json",
          },
          body: JSON.stringify(data),
         })

        const dataRes = await fetchData.json()
        
        if (!dataRes.alert) {

          toast.error(dataRes.message, {
            duration: 1500,
            style: { color: 'red' },
          }) 
        }

        if (dataRes.alert) {
          toast.success(dataRes.message, {
            duration: 1500,
            style:{color:'green'}
          })
          dispatch(loginRedux(dataRes))
          setTimeout(() => {
            navigate("/")
          },1000)
        }
       
      }
      
      else {
        toast.error('Fill in the Missing details!',{duration:1500})
      }
      
    }

  return (
      <>
      <div className='signUp'>
        <p><img src={signUpAnimation} alt="signUp"className='img' />Log In</p>
        <form onSubmit={handleSubmit}>
        
          <input type="email" name='email' id='email' placeholder='Enter Email' required value={data.email} onChange={handleOnchange} />

          <div className="pwd-cont">
            <input type={showPassword ? "text" : "password"} placeholder='Password' id='pwd' name='pwd' required style={{ letterSpacing: '6px' }} onChange={handleOnchange} value={data.pwd} />
            <small onClick={passwordHandler}>{showPassword ? <BiShow /> : <BiHide />}</small>
          </div>
          <button onClick={PleaseWait} type='submit'>Log in</button>
        </form>
        <p>Don't have account? <Link className='to-login' to={"/signUp"}>Sign Up</Link></p>
      </div>
      <Footer/>
      </>
    )
  }


export default Login