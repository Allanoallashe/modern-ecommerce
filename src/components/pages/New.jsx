import React, { useState } from 'react'
import './pages.css'
import { BsCloudUpload } from 'react-icons/bs'
import { ImagetoBase64 } from '../../Utility/ImagetoBase64'
import {toast} from 'react-hot-toast'

const New = () => {
  const [data, setData] = useState({
    name: '',
    category: '',
    image: '',
    price: '',
    description:'',
  })
  const handleOnchange = (e) => {
    const { name, value } = e.target
    setData((prev) => {
      return {
        ...prev,
        [name]:value
      }
    })
  }
  const uploadImage = async (e) => {
    const data = await ImagetoBase64(e.target.files[0])
    setData((prev) => {
      return {
        ...prev,
        image : data
      }
    })
  }
  const handleSubmit = async(e) => {
     e.preventDefault()
    console.log(data)
    
    const { name, image, category, price, description } = data
    if (name && image && category && price && description) {

      const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/uploadProduct`, {
      method: "POST",
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify(data)
    })
    const fetchRes = await fetchData.json()
      console.log(fetchRes)
      toast(fetchRes.message)

      setData(() => {
        return {
        name: '',
        category: '',
        image: '',
        price: '',
        description:'',
      }
    })

    } else {
      toast("All fields Required")
    }
  
}
  return (
    <div className='New'>
      <form onSubmit={handleSubmit}>
        <div className="New-input">
         <label htmlFor="name">Item</label>
          <input className=' input'  type={"text"} name='name' id='name' onChange={handleOnchange} value={data.name} />
        </div>
      <select name="category" id="category" onChange={handleOnchange} value={data.category}>
        <option value={"other"} hidden >Select</option>
        <option value={"trousers"}>Trousers</option>
        <option value={"shirts"}>Shirts</option>
        <option value={"shoes"}>Shoes</option>
        <option value={"electronics"}>Electronics</option>
      </select>
        <div className="New-images">
          <h4>Upload image</h4>
          {data.image ? <img className='newImg' id='img' src={data.image} alt="" /> : <BsCloudUpload className='New-upload' />}
          <input accept='image/*' type={'file'} id='image'  onChange={uploadImage} />
      </div>
        
      <div className="New-input">
        <label htmlFor="price">Prices</label>
        <input className='input' type={"text"} name='price' id='price' onChange={handleOnchange} value={data.price} />
      </div>
      <div className="New-input">
        <label htmlFor="description">Description</label>
        <textarea type={"text"} rows={4} name='description' id='description' onChange={handleOnchange} value={data.description} />
      </div>

        <button type='submit'>Save</button>
      </form>
    </div>
  )
}

export default New