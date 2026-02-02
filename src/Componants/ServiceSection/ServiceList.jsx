import ServiceCard from "./ServiceCard";

function ServiceList({ services }) {
  return (
    <div className="row g-4">
      {services.map((service, index) => (
        <div key={index} className="col-md-6 col-lg-4">
          <ServiceCard service={service} />
        </div>
      ))}
    </div>
  );
}

export default ServiceList;
