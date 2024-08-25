import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = ({ topServices }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container text-center">
      <div className="carousel-header d-flex align-items-center justify-content-center mb-4">
        <img
          src="/img/logo/logo.png"
          alt="Logo"
          className="me-2"
          style={{ width: '70px', height: '60px' }}
        />
        <h4 className="carousel-title">Serviços Mais Vendidos</h4>
      </div>
      <Slider {...settings}>
        {topServices.map((service) => (
          <div key={service.id} className="carousel-item ms-4">
            <Link to={service.link} className="carousel-link">
              <img
                src={`/img/sliderHome/p${service.carouselName}`}
                className="img-slider-barber"
                alt={service.name}
              />
              <div className="mt-3">
                <div className="carousel-caption">
                  <h6>{service.name}</h6>
                  <h3 className="price"><strong>{service.price}</strong></h3>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
