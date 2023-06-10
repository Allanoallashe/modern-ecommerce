import React from 'react'
import Slider from './carousel'
import './home.css'
import { FaMotorcycle } from 'react-icons/fa'
import { FaTruckMoving } from 'react-icons/fa'
import HomeCard from '../homeCard'
import { useSelector } from 'react-redux'
import CardFeatures from '../cardFeatures'

const Home = () => {
  const productData = useSelector((state) => state.product.productList)
  console.log(productData)
  const homeCardList = productData.slice(0, 9)
  const cardFeaturesClothes = productData.filter(el => el.category === "trousers", [])
  console.log(cardFeaturesClothes)

  const loadingArray = new Array(9).fill(null)
  const loadingArrayFeature = new Array(9).fill(null)

  return (
    <div>
      <Slider />
      <div className='home'>
        <h2>G4S Station <span>Delivery</span> <FaTruckMoving/></h2>
        <h4>Free Bike Delivery in Moi <FaMotorcycle /></h4>
        <div className="button">
          <button><a>Make Orders</a></button>
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

      <div className="trends">
        <h2>New Clothes</h2>
      </div>

      <div className="card-title">
        
        {
         cardFeaturesClothes[0] ? cardFeaturesClothes.map(el => {
            return(
              < CardFeatures
              
                key={el._id}
                image={el.image}
                name={el.name}
                price={el.price}
                category={el.category}
                
              />
        
           )
         })
          :
          loadingArrayFeature.map((el,index) => {
            return(
            <CardFeatures
              key={index}
              loading={"loading..."}
            />
          )
        })
        }
        
      </div>
    </div>
  )
}

export default Home