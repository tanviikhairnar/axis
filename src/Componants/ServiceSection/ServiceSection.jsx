import { useState } from "react";
import { Container } from "react-bootstrap";
import ServiceList from "./ServiceList";
import AddServiceModal from "./ServiceModal";
import "./service.css";

function ServiceSection() {
  const [services, setServices] = useState([]);
  const [popup, setPopup] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setServices((prev) => [...prev, { title, description }]);

    setTitle("");
    setDescription("");
    setPopup(false);
  };

  return (
    <section id="services" className="services-section py-5">
      <Container fluid>
        <div className="text-center mb-5">
          <small className="text-uppercase text-muted letter-spacing">
            Services
          </small>
          <h2 className="fw-light display-6 mt-2">What We Do Offer</h2>
          <p className="text-muted">
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit. Sed ut perspiciatis <br /> unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam
          </p>
        </div>

        <div className="text-center mb-5">
          <button
            className="btn btn-dark"
            onClick={() => setPopup(true)}
          >
            + Add Service
          </button>
        </div>

        <ServiceList services={services} />


        <AddServiceModal
          show={popup}
          onHide={() => setPopup(false)}
          title={title}
          description={description}
          setTitle={setTitle}
          setDescription={setDescription}
          handleSubmit={handleSubmit}
        />
      </Container>
    </section>
  );
}

export default ServiceSection;
