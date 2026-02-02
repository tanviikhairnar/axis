import { Container, Row, Col, Button, Stack } from "react-bootstrap";
import OfficeImage from "../../assets/about-square-10.webp";
import ChartIcon from "../../assets/chart.png";
import "./HomeSection.css";

function HomeSection() {
  return (
    <section id="home" className="home-section ">
      <Container fluid>
        <Row className="align-items-center gy-5">

          <Col lg={6}>
            <h1 className="display-5 fw-light mb-4">
              Transform Your Business Vision Into Reality
            </h1>

            <p className="text-muted mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>

            <Stack direction="horizontal" gap={4} className="mb-5">
              <Button variant="dark" size="lg" className="px-4">
                Get Started Today
              </Button>

              <Button
                variant="link"
                className="fw-semibold text-dark text-decoration-none"
              >
                Watch Demo
              </Button>
            </Stack>

            <Row className="text-start text-lg-start">
              <Col xs={4}>
                <h3 className="fw-bold">500+</h3>
                <p className="text-muted small">Successful Projects</p>
              </Col>
              <Col xs={4}>
                <h3 className="fw-bold">98%</h3>
                <p className="text-muted small">Client Satisfaction</p>
              </Col>
              <Col xs={4}>
                <h3 className="fw-bold">10+</h3>
                <p className="text-muted small">Years Experience</p>
              </Col>
            </Row>
          </Col>

          <Col lg={6} className="position-relative text-center">
            <img
              src={OfficeImage}
              alt="Business meeting"
              className="img-fluid rounded-4 hero-image shadow-lg"
            />

            <div className="stats-card shadow-sm">
              <div className="d-flex align-items-center gap-3">
                <div className="icon-box">
                  <img src={ChartIcon} alt="chart" />
                </div>
                <div>
                  <p className="mb-0 fw-semibold">Revenue Growth</p>
                  <p className="mb-0 text-success fw-bold">+45%</p>
                </div>
              </div>
            </div>
          </Col>

        </Row>
      </Container>
    </section>
  );
}

export default HomeSection;
