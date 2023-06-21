
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import pic1 from '../../images/banner2.avif'
import pic2 from '../../images/banner.webp'
import pic3 from '../../images/banner1.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Header.css'

function Slider() {
  return (
    <div className='sell'>
      <section>
        <h2>Hello Welcome to Allanity Shop</h2>
      </section>
    <Carousel className='carousel' slide={false}>
      <Carousel.Item className='carousel-item'>
        <img
          src={pic1}
          alt="First slide"
        />
        <Carousel.Caption className='caption'>
          <h4>Welcome To Our Shop</h4>
          <p>There are a couple of discounts here</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={pic2}
          alt="Second slide"
        />

        <Carousel.Caption className='caption'>
          <h4>The Phones Are Available at Cheap Prices</h4>
          <p>The latest models no Generics</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={pic3}
          alt="Third slide"
        />

        <Carousel.Caption className='caption'>
          <h4>The Clothwear is Perfect</h4>
          <p>
            Try out the Footwear as well
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      </Carousel>
      </div>
  );
}

export default Slider;