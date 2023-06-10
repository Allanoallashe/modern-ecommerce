import React from 'react'
import './pages/home.css'
import {IoIosPricetags} from 'react-icons/io'

const HomeCard = ({name,image,category,price,loading}) => {
  return (
    <div className='card'>
      {name ? (
      <>
        <img src={image} alt="" />
        <h3>{name}</h3>
        <p>{category}</p>
        <p><IoIosPricetags /> {price}</p>
      </>
      )
        :
        <p>{loading}</p>
      }
    </div>
  )
}

export default HomeCard