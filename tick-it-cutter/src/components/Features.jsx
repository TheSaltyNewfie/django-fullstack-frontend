import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import KendrickLamarImg from '../assets/Kendrick-Lamar-img.jpg';
import EminemImg from '../assets/Eminem.webp';
import JayzImg from '../assets/jay-z.jpg'
function Features() {
  return (
    <div className='featureSlide'>
      <Carousel>
        <Carousel.Item>
          <img
            style={{ width: '600px', height: '500px' }}
            className='d-block w-100'
            src={KendrickLamarImg}
            alt='First slide'
          />
          <Carousel.Caption>
            <h3>Kendrick Lamar</h3>
            <p>Coming Soon</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ width: '600px', height: '500px' }}
            className='d-block w-100'
            src={EminemImg}
            alt='Second slide'
          />
          <Carousel.Caption>
            <h3>Eminem</h3>
            <p>Coming Soon</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ width: '600px', height: '500px' }}
            className='d-block w-100'
            src={JayzImg}
            alt='Third slide'
          />
          <Carousel.Caption>
            <h3>Jay-Z</h3>
            <p>Coming Soon</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Features;

