
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
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={pic2}
          alt="Second slide"
        />

        <Carousel.Caption className='caption'>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={pic3}
          alt="Third slide"
        />

        <Carousel.Caption className='caption'>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      </Carousel>
      </div>
  );
}

export default Slider;