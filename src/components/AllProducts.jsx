import React, { useEffect, useRef, useState } from 'react'
import CardFeatures from './cardFeatures'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs'
import { FaFilter } from 'react-icons/fa'
import FilterProducts from './FilterProducts'
import { useSelector } from 'react-redux'
import './pages/home.css'

const AllProducts = ({heading}) => {
  const productData = useSelector((state) => state.product.productList)
  const cardFeaturesClothes = productData.filter(el => el.category === "trousers", [])
  
    // filter displayed data
  const [filterBy,setFilterBy] = useState("")
  const [dataFilter, setDataFilter] = useState([])
  
  useEffect(() => {
    setDataFilter(productData)
  },[productData])

  const handleFilteredProduct = (category) => {
    setFilterBy(category)
    const filter = productData.filter(el => el.category.toLowerCase() === category.toLowerCase())
      setDataFilter(() => {
        return [
          ...filter
        ]
      })
  }

   const slideProductRef = useRef()
  const nextProduct = () => {
    slideProductRef.current.scrollLeft += 250;
  }
  const prevProduct = () => {
    slideProductRef.current.scrollLeft -= 250;
  }
  
  const loadingArrayFeature = new Array(15).fill(null)
  const categoryList = [...new Set(productData.map(el => el.category))]

  return (
    <div>
      <div className="trends">
        <h2>{heading}</h2>
        <BsFillArrowLeftCircleFill onClick={prevProduct}  className='arrow-left' />
        <BsFillArrowRightCircleFill onClick={nextProduct} className='arrow-right' />
      </div>

      <div className="card-title" ref={slideProductRef}>
        
        {
         cardFeaturesClothes[0] ? cardFeaturesClothes.map(el => {
            return(
              < CardFeatures
                id={el._id}
                key={el._id}
                image={el.image}
                name={el.name}
                price={el.price}
                category={el.category}
                
              />
        
           )
         })
          :
          loadingArrayFeature.map((el,index) => (
            <CardFeatures
              key={index}
              loading="loading..."
            />
          ))
        }
        
      </div>

      <div className="filter-title">
        <h2><FaFilter/> Filter Available Products</h2>
      </div>
      <div className="other-products">
        {
          categoryList[0] ? categoryList.map(el => {
            return (
              <FilterProducts
                category={el}
                key={el}
                isActive = {el === filterBy}
                onClick={() => handleFilteredProduct(el)}
                
              />
            )
          }
          ) :
            <p style={{color:"#550987", fontSize:"18px", fontWeight:"bold"}}>Loading...</p>
        }
      </div>
      <div className="filtered-products">
        {
          dataFilter.map(el => {
            return (
              <CardFeatures
                id={el._id}
                key={el._id}
                image={el.image}
                name={el.name}
                category={el.category
                }
                price={el.price}
              />
            )
          })
        }
      </div>
    </div>
  )
}

export default AllProducts