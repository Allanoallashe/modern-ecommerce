import React from 'react'
import { ImSpoonKnife } from 'react-icons/im'
import './pages/home.css'

const FilterProducts = ({category}) => {
  return (
    <div>
      <div className="available-products">
          <div className="knife">
          <ImSpoonKnife/>
          </div>
          <p>{category}</p>
      </div>
      
    </div>
  )
}

export default FilterProducts