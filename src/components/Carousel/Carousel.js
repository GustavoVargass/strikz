import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Banner1 from '../../imgs/bannerSites.png';
import Banner2 from '../../imgs/bannerNegocio.png';
import Banner3 from '../../imgs/bannerConectar.png';
import Banner4 from '../../imgs/bannerGames.png';
import "./Carousel.css";

const CarouselComponent = () => {
    const images = [Banner1, Banner2, Banner3, Banner4];
    const totalSlides = images.length;
  
    const [currentSlide, setCurrentSlide] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
      }, 7000);
  
      return () => clearInterval(interval);
    }, [totalSlides]);
  
    const handleBeforeSlide = (oldIndex, newIndex) => {
      if (oldIndex === totalSlides - 1 && newIndex === 0) {
        return totalSlides - 1;
      }
      if (oldIndex === 0 && newIndex === totalSlides - 1) {
        return 0;
      }
      return newIndex;
    };
  
    return (
      <div className="carousel">
        <Carousel
          showStatus={false}
          showThumbs={false}
          infiniteLoop={true}
          selectedItem={currentSlide}
          onChange={setCurrentSlide}
          showArrows={true}
          beforeSlide={handleBeforeSlide}
        >
          {images.map((image, index) => (
            <div className="slide" key={index}>
              <img src={image} alt={`Banner ${index + 1}`} />
            </div>
          ))}
        </Carousel>
      </div>
    );
  };

export default CarouselComponent;
