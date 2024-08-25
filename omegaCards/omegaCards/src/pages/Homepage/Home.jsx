import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Carousel from './carousel';
import ServiceList from './serviceList';

const Home = () => {
  const [topServices] = useState([
    { id: 2, carouselName: '1.png', name: 'Kink-Aquatic Kingdoms Helike', description: 'Aparar e modelar a barba', price: 'R$ 30' },
    { id: 3, carouselName: '2.png', name: 'King-Aquatic Kingdoms Helike', description: 'Pacote completo de corte e barba', price: 'R$ 70' },
    { id: 4, carouselName: '3.png', name: 'Queen Kingdoms Helike', description: 'Pacote completo de corte e barba', price: 'R$ 70' },
    { id: 5, carouselName: '4.png', name: 'Ace Kingdoms Helike', description: 'Pacote completo de corte e barba', price: 'R$ 70' },
  ]);

  const [services] = useState([
    { id: 1, name: 'Corte de Cabelo', description: 'Corte de cabelo profissional', price: 'R$ 50', details: 'Inclui lavagem e secagem.', genericDetails: 'Serviço realizado por profissionais experientes.' },
    { id: 2, name: 'Barba', description: 'Aparar e modelar a barba', price: 'R$ 30', details: 'Inclui hidratação da barba.', genericDetails: 'Utilizamos produtos de alta qualidade.' },
    { id: 3, name: 'Corte + Barba', description: 'Pacote completo de corte e barba', price: 'R$ 70', details: 'Pacote promocional.', genericDetails: 'Pacote econômico para um visual completo.' },
    { id: 4, name: 'Descoloração capilar', description: 'Preço para descoloração completa', price: 'R$ 40', details: 'Duração de 30 minutos.', genericDetails: 'Procedimento seguro e eficaz.' },
    { id: 5, name: 'Hidratação', description: 'Tratamento completo para os cabelos', price: 'R$ 100', details: 'Inclui hidratação e reconstrução.', genericDetails: 'Tratamento profundo para cabelos saudáveis.' },
    { id: 6, name: 'Hiadrata ção', description: 'Tratamento caompleto para os cabelos', price: 'R$ 10a0', details: 'Incalui hidratação e reconstrução.', genericDetails: 'Tratamento profundo para cabelos saudáveis.' },
  ]);

  return (
    <div className="pagina-servicos col-sm-12">
      <Carousel topServices={topServices} />
      
      <ServiceList services={services} />
      
      <div className="fixed-buttons">
        <Link to="/calendar">
          <button className="btn-agendar">Agendar Corte</button>
        </Link>
        <Link to="/budget">
          <button className="btn-orcamento">Orçamento online</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;