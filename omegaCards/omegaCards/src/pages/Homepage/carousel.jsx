import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = ({ topServices }) => {
  const settings = {
    infinite: true,  // Habilita o carrossel infinito
    speed: 500,
    slidesToShow: 3,  // Número de imagens visíveis por slide
    slidesToScroll: 1,
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
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
      <h4 className="carousel-title">Serviços Mais Vendidos</h4>
      <Slider {...settings}>
        {topServices.map((service) => (
          <div key={service.id} className="carousel-item">
            <img
              src={`/img/sliderHome/p${service.carouselName}`}
              className="img-slider-barber"
              alt={service.name}
            />
            <div className="mt-3">
              <div className="carousel-caption ">
                <h6>{service.name}</h6>
                <h3 className="price"><strong>{service.price}</strong></h3>
              </div>
            </div>
          </div>
        ))}
      </Slider>

    </div>
  );
};

export default Carousel;