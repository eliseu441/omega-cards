
const ServiceCard = ({ service }) => (
  <div className="col-md-4 mb-4">
    <div className="card cardBarber h-100">
      <div className="card-body row col-12 d-flex align-text-center justify-content-center" style={{ textAlign: 'center!important' }}>
        <h3 className="card-title">{service.name}</h3>
        <p className="card-text"><strong>Preço: {service.price}</strong></p>
        <div id="" class="d-flex flex-column align-items-center" style="">
          <button type="button"   class="btn btn-primary col-6 mb-2" >Ir para loja </button>
          <button type="button"  class="btn btn-primary col-6 " data-bs-toggle="collapse" data-bs-target={`#collapse${service.id}`} aria-expanded="false" aria-controls={`collapse${service.id}`}>Expandir detalhes ↓</button>
        </div>
        <div className="collapse m-2" id={`collapse${service.id}`}>
          <div className="card card-body">
            <p className="card-text"><small className="text-muted">{service.details}</small></p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ServiceCard;