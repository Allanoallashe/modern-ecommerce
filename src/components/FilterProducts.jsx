import React from 'react'
import { ImFilter } from 'react-icons/im'
import { GiRunningShoe, GiArmoredPants } from 'react-icons/gi'
import {FaHeadphones, FaTshirt} from 'react-icons/fa'
import './pages/home.css'

const FilterProducts = ({ category, onClick, isActive }) => {
 
    if (category === "shoes") {
      return (
        <div className="available-products" onClick={onClick}>
          <div className={isActive ? "isActive" : "knife"}>
            <GiRunningShoe />
          </div>
          <p>{category}</p>
        </div>
      )
  }
  
    if (category === "trousers") {
      return (
        <div className="available-products" onClick={onClick}>
          <div className={isActive ? "isActive" : "knife"}>
            <GiArmoredPants/>
          </div>
          <p>{category}</p>
        </div>
      )
  }
  
    if (category === "electronics") {
      return (
        <div className="available-products" onClick={onClick}>
          <div className={isActive ? "isActive" : "knife"}>
            <FaHeadphones />
          </div>
          <p>{category}</p>
        </div>
      )
  }
  
    if (category === "shirts") {
      return (
        <div className="available-products" onClick={onClick}>
          <div className={isActive ? "isActive" : "knife"}>
            <FaTshirt />
          </div>
          <p>{category}</p>
        </div>
      )
    }
  
  return (
    <div className='filter-box'>
      <div className="available-products" onClick={onClick}>
          <div  className={isActive ? "isActive" : "knife"}>
          <ImFilter/>
          </div>
          <p>{category}</p>
      </div>
      
    </div>
  )
}

export default FilterProducts