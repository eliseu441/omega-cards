import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Carousel from './carousel';
import ServiceList from './serviceList';

const Home = () => {
  const [topServices] = useState([
    { id: 2, carouselName: '1.png', link: 'https://www.linkedin.com/feed/', name: 'Kink-Aquatic Kingdoms Helike', description: 'Aparar e modelar a barba', price: 'R$ 150' },
    { id: 3, carouselName: '2.png', link: 'https://www.linkedin.com/feed/', name: 'King-Aquatic Kingdoms Helike', description: 'Pacote completo de corte e barba', price: 'R$ 150' },
    { id: 4, carouselName: '3.png', link: 'https://www.linkedin.com/feed/', name: 'Queen Kingdoms Helike', description: 'Pacote completo de corte e barba', price: 'R$ 150' },
    { id: 5, carouselName: '4.png', link: 'https://www.linkedin.com/feed/', name: 'Ace Kingdoms Helike', description: 'Pacote completo de corte e barba', price: 'R$ 150' },
  ]);

  const [services] = useState([
    { id: 1, link: 'https://www.linkedin.com/feed/',name: 'Venda de Camisas', description: 'Corte de cabelo profissional', price: 'R$ 50', details: 'Venda separada de camisas a preço competitivo.', genericDetails: 'Serviço realizado por profissionais experientes.' },
    { id: 2, link: 'https://www.linkedin.com/feed/',name: 'Venda de Baralhos', description: 'Aparar e modelar a barba', price: 'R$ 30', details: 'Venda de baralhos de primeira linha completamente personalizados.', genericDetails: 'Utilizamos produtos de alta qualidade.' },
    { id: 3, link: 'https://www.linkedin.com/feed/',name: 'Combo camisa+baralho', description: 'Pacote completo de corte e barba', price: 'R$ 70', details: 'Pacote promocional para quem compra uma camisa com a mesma coleção do baralho pelo link combinado.', genericDetails: 'Pacote econômico para um visual completo.' },
  ]);

  return (
    <div className="pagina-servicos col-sm-12">
      <Carousel topServices={topServices} />
      
      <ServiceList services={services} />
      

    </div>
  );
};

export default Home;