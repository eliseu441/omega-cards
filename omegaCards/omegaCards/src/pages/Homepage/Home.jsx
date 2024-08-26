import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Carousel from './carousel';
import ServiceList from './serviceList';
import data from './../../components/data.js'; 
const Home = () => {
  const [topServices, setTopServices] = useState([]);
  const [services, setServices] = useState([]);
  useEffect(() => {
    // Definindo os dados do JSON no estado
    setTopServices(data.topServices);
    setServices(data.services);
  }, []);

  return (
    <div className="pagina-servicos col-sm-12">
      <Carousel topServices={topServices} />
      
      <ServiceList services={services} />
      

    </div>
  );
};

export default Home;