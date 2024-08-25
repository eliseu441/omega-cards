
const ServiceCard = ({ service }) => (
  <div className="col-md-4 mb-4">
    <div className="card cardBarber h-100">
      <div className="card-body row col-12 d-flex align-text-center justify-content-center" style={{ textAlign: 'center!important' }}>
        <h5 className="card-title">{service.name}</h5>
        <p className="card-text">{service.description}</p>
        <p className="card-text"><strong>Preço: {service.price}</strong></p>
        <button className="btn btn-primary col-6 ms-4" style={{maxHeight:'39px'}} type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${service.id}`} aria-expanded="false" aria-controls={`collapse${service.id}`}>
          Detalhes
        </button>
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