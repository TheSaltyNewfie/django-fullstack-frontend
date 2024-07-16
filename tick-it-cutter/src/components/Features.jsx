import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import KendrickLamarImg from '../assets/Kendrick-Lamar-img.jpg';

function Features() {
  return (
    <div className='featureSlide'>
      <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={KendrickLamarImg}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Kendric Lamar</h3>
          <p>Coming Soon</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={KendrickLamarImg}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={KendrickLamarImg}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    
  );
}

export default Features;
