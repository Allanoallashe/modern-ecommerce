
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import pic from '../../images/banner2.avif'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Header.css'

function Slider() {
  return (
    <Carousel className='carousel' slide={false}>
      <Carousel.Item className='carousel-item'>
        <img
          src={pic}
          alt="First slide"
        />
        <Carousel.Caption className='caption'>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={pic}
          alt="Second slide"
        />

        <Carousel.Caption className='caption'>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={pic}
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
  );
}

export default Slider;