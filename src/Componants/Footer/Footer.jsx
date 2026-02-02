import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css"
import twitter from "../../assets/twitter.png";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import linkedin from "../../assets/linkedin (1).png";

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5">
      <Container fluid>
        <Row className="gy-4">

          <Col lg={4} md={6}>
            <h3 className="fw-bold">Axis</h3>
            <p className="small text-secondary">
              Cras fermentum odio eu feugiat lide par naso tierra.
              Justo eget nada terra vida magna derita valies darta
              donna mare fermentum iaculis eu non diam phasellus.
            </p>

            <div className="d-flex gap-2 mt-3">
              <a href="#" className="btn btn-outline-light btn-sm rounded-circle">
                <img src={twitter} alt="twitter" width="16" />
              </a>
              <a href="#" className="btn btn-outline-light btn-sm rounded-circle">
                <img src={facebook} alt="facebook" width="16" />
              </a>
              <a href="#" className="btn btn-outline-light btn-sm rounded-circle">
                <img src={instagram} alt="instagram" width="16" />
              </a>
              <a href="#" className="btn btn-outline-light btn-sm rounded-circle">
                <img src={linkedin} alt="linkedin" width="16" />
              </a>
            </div>
          </Col>

          <Col lg={2} md={6}>
            <h5 className="fw-semibold">Useful Links</h5>
            <ul className="list-unstyled small">
              <li className="mb-2">
                <a href="#" className="text-secondary text-decoration-none">Home</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-secondary text-decoration-none">About us</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-secondary text-decoration-none">Services</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-secondary text-decoration-none">Terms of service</a>
              </li>
              <li>
                <a href="#" className="text-secondary text-decoration-none">Privacy policy</a>
              </li>
            </ul>
          </Col>

          <Col lg={3} md={6}>
            <h5 className="fw-semibold">Our Services</h5>
            <ul className="list-unstyled small text-secondary">
              <li className="mb-2">Web Design</li>
              <li className="mb-2">Web Development</li>
              <li className="mb-2">Product Management</li>
              <li className="mb-2">Marketing</li>
              <li>Graphic Design</li>
            </ul>
          </Col>

          <Col lg={3} md={6}>
            <h5 className="fw-semibold">Contact Us</h5>
            <p className="small text-secondary mb-2">
              A108 Adam Street <br />
              New York, NY 535022 <br />
              United States
            </p>
            <p className="small mb-0">
              <strong>Phone:</strong> +1 5589 55488 55 <br />
              <strong>Email:</strong> info@example.com
            </p>
          </Col>

        </Row>
      </Container>

      <div className="border-top border-secondary mt-4 py-3">
        <Container className="text-center small text-secondary">
          <p className="mb-1">
            © Copyright <strong className="text-light">Axis</strong>. All Rights Reserved
          </p>
          <p className="mb-0">Designed by BootstrapMade</p>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;

