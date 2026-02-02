import { Container, Row, Col, Button, Card } from "react-bootstrap";
import "./whyUs.css";
import businessImage3 from "../../assets/service img.webp"

const WhyUs = () => {
    return (
        <section className="py-5 my-5">
            <Container fluid>

                <div className="text-center mb-5">
                    <small className="text-uppercase text-muted letter-spacing">
                        Why Us
                    </small>
                    <h2 className="fw-light display-6 mt-2">Why Choose Us</h2>
                    <p className="text-muted">
                            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit. Sed ut perspiciatis <br /> unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam
                        </p>
                </div>

                <Row className="align-items-center gy-5">

                    <Col lg={6}>
                        <h3 className="display-5 fw-light mb-4">
                            Why Partner With Us
                        </h3>

                        <p className="text-muted">
                            We deliver exceptional results through proven expertise, cutting-edge innovation, and unwavering commitment to your success. Our comprehensive approach ensures sustainable growth and competitive advantage
                        </p>
                    </Col>


                    <Col lg={6}>
                        <div className="position-relative">

                            <img
                                src={businessImage3}
                                alt="Business meeting"
                                className="img-fluid rounded-4"
                            />
                        </div>
                    </Col>
                </Row>

            </Container>
        </section>
    );
};

export default WhyUs;
