import React from 'react'
import './pages/home.css'
import {IoIosPricetags} from 'react-icons/io'

const HomeCard = ({name,image,category,price}) => {
  return (
    <div className='card'>
      <img src={image} alt="" />
      <h3>{name}</h3>
      <p>{category}</p>
      <p><IoIosPricetags/> {price}</p>
    </div>
  )
}

export default HomeCard