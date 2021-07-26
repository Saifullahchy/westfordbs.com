import React, {useState} from 'react'
import { Link } from 'react-router-dom';
//react-id-swiper
import 'swiper/css/swiper.css'
import Swiper from 'react-id-swiper';

//images
import Slider1 from '../../../assets/slider image/1.png'
import Slider2 from '../../../assets/slider image/2.png'
import Slider3 from '../../../assets/slider image/3.png'
import Slider4 from '../../../assets/slider image/4.png'
import Slider5 from '../../../assets/slider image/5.png'


//Slider Config options

const HeroSliderConfigs = {
    containerClass: 'swiper-container hero-slider',
    parallax: true,
    centeredSlides: true,
    grabCursor: true,
    speed: 500,
    spaceBetween: 0,
    // effect: 'slide',
    parallaxEl: {
        el: '.parallax-bg',
        value: '-23%'
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
  };
  
  // slider component
  const HeroSlider = () => {
    const [parallaxSwiper, setParallaxSwiper] = useState(null);
    const parallaxAmount = parallaxSwiper ? parallaxSwiper.width * 0.95 : 0;
    const parallaxOpacity = 0.5;
    return (
      <Swiper {...HeroSliderConfigs} getSwiper={setParallaxSwiper}>
        <div className="hero-slide">
          <div
            className="slide-image"
            data-swiper-parallax={parallaxAmount}
            data-swiper-parallax-opacity={parallaxOpacity}
          >
            <img src={Slider1} alt="image1" height="auto" width="100%"/>
            
          </div>
          <div className="col-md-6 offset-md-3 my-auto text-center text-white">
            {/* <h1 className="text-uppercase mb-2 font-weight-bold">Slide 1</h1>
            <p className="mb-5 small">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et cumque,
              ex quibusdam dolorem quae itaque velit. Nobis nesciunt sed corrupti
              ab quia neque, porro laborum error, autem facilis voluptates
              laboriosam?
            </p> */}
            {/* <Link>
            <button type="button" className='btn btn-danger btn-lg btn-block'>Take the free Assessment</button>
            </Link> */}
            
            
          </div>
        </div>
        <div className="hero-slide">
          <div
            className="slide-image"
            data-swiper-parallax={parallaxAmount}
            data-swiper-parallax-opacity={parallaxOpacity}
          >
            <img src={Slider2} alt="image2" height="auto" width="100%"></img>
          </div>
          <div className="col-md-6 offset-md-3 my-auto text-center text-black">
            {/* <h1 className="text-uppercase mb-2 font-weight-bold">Slide 1</h1>
            <p className="mb-5 small">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et cumque,
              ex quibusdam dolorem quae itaque velit. Nobis nesciunt sed corrupti
              ab quia neque, porro laborum error, autem facilis voluptates
              laboriosam?
            </p> */}
            
          </div>
        </div>
        <div className="hero-slide">
          <div
            className="slide-image"
            data-swiper-parallax={parallaxAmount}
            data-swiper-parallax-opacity={parallaxOpacity}
          >
            <img src={Slider3} alt="image3" height="auto" width="100%"></img>
          </div>
          <div className="col-md-6 offset-md-3 my-auto text-center text-white">
            {/* <h1 className="text-uppercase mb-2 font-weight-bold">Slide 1</h1>
            <p className="mb-5 small">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et cumque,
              ex quibusdam dolorem quae itaque velit. Nobis nesciunt sed corrupti
              ab quia neque, porro laborum error, autem facilis voluptates
              laboriosam?
            </p> */}
          </div>
        </div>
        <div className="hero-slide">
          <div
            className="slide-image"
            data-swiper-parallax={parallaxAmount}
            data-swiper-parallax-opacity={parallaxOpacity}
          >
            <img src={Slider4} alt="image3" height="auto" width="100%"></img>
          </div>
          <div className="col-md-6 offset-md-3 my-auto text-center text-white">
            {/* <h1 className="text-uppercase mb-2 font-weight-bold">Slide 1</h1>
            <p className="mb-5 small">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et cumque,
              ex quibusdam dolorem quae itaque velit. Nobis nesciunt sed corrupti
              ab quia neque, porro laborum error, autem facilis voluptates
              laboriosam?
            </p> */}
          </div>
        </div>
        <div className="hero-slide">
          <div
            className="slide-image"
            data-swiper-parallax={parallaxAmount}
            data-swiper-parallax-opacity={parallaxOpacity}
          >
            <img src={Slider5} alt="image3" height="auto" width="100%"></img>
          </div>
          <div className="col-md-6 offset-md-3 my-auto text-center text-white">
            {/* <h1 className="text-uppercase mb-2 font-weight-bold">Slide 1</h1>
            <p className="mb-5 small">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et cumque,
              ex quibusdam dolorem quae itaque velit. Nobis nesciunt sed corrupti
              ab quia neque, porro laborum error, autem facilis voluptates
              laboriosam?
            </p> */}
          </div>
        </div>
      </Swiper>
    );
  };
  
  export default HeroSlider;