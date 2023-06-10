import React from 'react'
import Slider from './carousel'
import './home.css'
import { FaMotorcycle } from 'react-icons/fa'
import { FaTruckMoving } from 'react-icons/fa'
import HomeCard from '../homeCard'
import {useSelector} from 'react-redux'

const Home = () => {
  const productData = useSelector((state) => state.product.productList)
  console.log(productData)
  const homeCardList = productData.slice(1,9)
  return (
    <div>
      <Slider />
      <div className='home'>
        <h2>Station<span>Delivery</span> <FaTruckMoving/></h2>
        <h4>MU Bike Delivery <FaMotorcycle /></h4>
      </div>
      <div className="button">
        <button>Make Orders</button>
      </div>
      <div className="images">
        {
          homeCardList[0] && homeCardList.map(el => {
            return (
              <HomeCard
                key={el._id}
                image={el.image}
                name={el.name}
                price={el.price}
                category={el.category}
              />
            )
          })
        }
       
      </div>
    </div>
  )
}

export default Home