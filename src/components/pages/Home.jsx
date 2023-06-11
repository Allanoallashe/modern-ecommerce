import React, { useEffect, useRef, useState } from 'react'
import Slider from './carousel'
import './home.css'
import { FaMotorcycle } from 'react-icons/fa'
import { FaTruckMoving } from 'react-icons/fa'
import HomeCard from '../homeCard'
import { useSelector } from 'react-redux'
import CardFeatures from '../cardFeatures'
import { FaFilter } from 'react-icons/fa'
import FilterProducts from '../FilterProducts'
import { BsFillArrowLeftCircleFill } from 'react-icons/bs'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'


const Home = () => {
  const productData = useSelector((state) => state.product.productList)
  console.log(productData)
  const homeCardList = productData.slice(0, 4)
  const cardFeaturesClothes = productData.filter(el => el.category === "trousers", [])
  console.log(cardFeaturesClothes)

  const loadingArray = new Array(9).fill(null)
  const loadingArrayFeature = new Array(9).fill(null)

  const categoryList = [...new Set(productData.map(el => el.category))]
  console.log(categoryList)


  // filter displayed data
  const [filterBy,setFilterBy] = useState("")
  const [dataFilter, setDataFilter] = useState([])
  
  useEffect(() => {
    setDataFilter(productData)
  },[productData])

  const handleFilteredProduct = (category) => {
    const filter = productData.filter(el => el.category.toLowerCase() === category.toLowerCase())
      setDataFilter(() => {
        return [
          ...filter
        ]
      })
  }

  // scrolling cart-items
  const slideProductRef = useRef()
  const nextProduct = () => {
    slideProductRef.current.scrollLeft += 250;
  }
  const prevProduct = () => {
    slideProductRef.current.scrollLeft -= 250;
  }

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
        <h2>Offers</h2>
        <BsFillArrowLeftCircleFill onClick={prevProduct}  className='arrow-left' />
        <BsFillArrowRightCircleFill onClick={nextProduct} className='arrow-right' />
      </div>

      <div className="card-title" ref={slideProductRef}>
        
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

      <div className="filter-title">
        <h2><FaFilter/> Filter Available Products</h2>
      </div>
      <div className="other-products">
        {
          categoryList[0] && categoryList.map(el => {
            return (
              <FilterProducts category={el} />
            )
          })
        }
      </div>
      <div className="filtered-products">
        {
          dataFilter.map(el => {
            return (
              <CardFeatures
                key={el._id}
                image={el.image}
                name={el.name}
                category={el.cate
                }
              />
            )
          })
        }
      </div>

    </div>
  )
}

export default Home