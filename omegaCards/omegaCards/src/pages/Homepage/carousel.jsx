import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useCart  } from './../../layout/AppParams/AppParams';

const Carousel = ({ topServices }) => {
   const { addProductToCart } = useCart(); // Obtém a função para adicionar produtos ao carrinho

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    autoplay: true,
    autoplaySpeed: 5000,
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

  const handleAddToCart = (id) => {
    addProductToCart(id); // Adiciona o ID ao carrinho
  };

  return (
    <div className="slider-container text-center">
      <div className="carousel-header d-flex align-items-center justify-content-center mb-4">
        <h4 className="carousel-title">Camisas mais vendidas</h4>
      </div>
      <Slider {...settings}>
        {topServices.map((service) => (
          <div key={service.id} className="carousel-item ms-4">
            <Link to={service.link} className="carousel-link">
              <img
                src={`/img/sliderHome/p${service.carouselName}`}
                className="img-slider-barber"
                alt={service.name}
                onDoubleClick={() => handleAddToCart(service.id)} // Adiciona ao carrinho no duplo clique
              />
            </Link>
            <div className="mt-3">
              <div 
                className="carousel-caption"
                onClick={() => handleAddToCart(service.id)} // Adiciona ao carrinho no clique
              >
                <h6>{service.name}</h6>
                <h3 className="price">{service.price}</h3>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
