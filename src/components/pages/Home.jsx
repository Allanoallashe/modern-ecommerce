import React from 'react'
import Slider from './carousel'
import './home.css'
import { FaMotorcycle } from 'react-icons/fa'
import { FaTruckMoving } from 'react-icons/fa'
import HomeCard from '../homeCard'
import { useSelector } from 'react-redux'
import AllProducts from '../AllProducts'
import Footer from './footer'


const Home = () => {
  const productData = useSelector((state) => state.product.productList)
  const homeCardList = productData.slice(0, 5)

  const loadingArray = new Array(5).fill(null)

  return (
    <div>
      <Slider />
      <div className='home'>
        <h2>G4S Station <span>Delivery</span> <FaTruckMoving/></h2>
        <h4>Free Bike Delivery in Moi <FaMotorcycle /></h4>
        <div className="button">
          <button><a style={{textDecoration:"none"}} href='/Cart'>Make Orders</a></button>
        </div>
      </div>
      
      <div className="images">
        {
          homeCardList[0] ? homeCardList.map(el => {
            return (
              <HomeCard
                key={el._id}
                image={el.image}
                name={el.name}
                price={el.price}
                category={el.category}
              />
            );
          })
          :
        loadingArray.map((el,index) => {
          return(
            <HomeCard
              key={index}
              loading={"loading..."}
            />
          )
        })
        }
       
      </div>

      <AllProducts heading={'Offers'} />

      <Footer />
      
    </div>
  )
}

export default Home