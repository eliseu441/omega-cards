
import ServiceCard from './serviceCard';

const ServiceList = ({ services }) => (
  <div className="container sc_services mt-5">
    <h4 className="text-center mb-4 title-services">Todos os Serviços</h4>
    <div className="row">
      {services.map(service => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </div>
  </div>
);

export default ServiceList;