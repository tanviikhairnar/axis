function ServiceCard({ service }) {
  return (
    <div className="service-card h-100 d-flex flex-column">
      <h5 className="fw-normal mb-3">{service.title}</h5>
      <p className="text-muted">{service.description}</p>

      <a
        href="/"
        className="service-link mt-auto"
        onClick={(e) => e.preventDefault()}
      >
        Learn More <span>→</span>
      </a>
    </div>
  );
}

export default ServiceCard;