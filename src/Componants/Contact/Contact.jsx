import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { Envelope, Telephone, GeoAlt } from "react-bootstrap-icons";
import "./contact.css";
import cloud from "../../assets/messenger.png"

const Contact = () => {
  return (
    <section id="contact" className="py-5 bg-white">
      <Container fluid>
        <div className="text-center mb-5">
                    <small className="text-uppercase text-muted letter-spacing">
                        CONTACT
                    </small>
                    <h2 className="fw-light display-6 mt-2">Let's Connect</h2>
                    <p className="text-muted">
                        Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit. Sed ut perspiciatis <br /> unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam
                    </p>
                </div>

        <Row className="g-5 align-items-stretch">

    
          <Col lg={5}>
            <Card className="h-100 border-0 bg-light rounded-4 p-4">
              <div className="mb-4">
                <div
                  className="d-flex align-items-center justify-content-center rounded-circle bg-white shadow-sm mb-3"
                  style={{ width: 48, height: 48 }}
                > <img src={cloud} alt="Contact Icon" className="img-fluid" />
                </div>

                <h3 className="fw-light mb-2">Let's Connect</h3>
                <p className="text-muted">
                  We're here to discuss your vision and explore how we can bring
                  it to life together.
                </p>
              </div>

              <div className="mb-4 d-flex gap-3 align-items-start">
                <Envelope size={20} className="text-muted mt-1" />
                <div>
                  <small className="text-uppercase text-muted">Email Us</small>
                  <p className="mb-0">contact@example.com</p>
                </div>
              </div>

              <div className="mb-4 d-flex gap-3 align-items-start">
                <Telephone size={20} className="text-muted mt-1" />
                <div>
                  <small className="text-uppercase text-muted">Call Us</small>
                  <p className="mb-0">+1 (555) 432-8976</p>
                </div>
              </div>

              <div className="d-flex gap-3 align-items-start">
                <GeoAlt size={20} className="text-muted mt-1" />
                <div>
                  <small className="text-uppercase text-muted">Visit Us</small>
                  <p className="mb-0">
                    547 Madison Avenue <br />
                    New York, NY 10022
                  </p>
                </div>
              </div>
            </Card>
          </Col>

        
          <Col lg={7}>
            <Card className="h-100 border-0 shadow-sm rounded-4 p-4">
              <h3 className="fw-light mb-4">Send us a message</h3>

              <Form>
                <Row className="g-3">
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Full Name</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Email Address</Form.Label>
                      <Form.Control type="email" />
                    </Form.Group>
                  </Col>

                  <Col md={12}>
                    <Form.Group>
                      <Form.Label>Subject</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                  </Col>

                  <Col md={12}>
                    <Form.Group>
                      <Form.Label>Message</Form.Label>
                      <Form.Control as="textarea" rows={5} />
                    </Form.Group>
                  </Col>
                </Row>

                <Button
                  className="mt-4 px-4 py-2 d-flex align-items-center gap-2 btn-dark"
                >
                  Send Message <span>→</span>
                </Button>
              </Form>
            </Card>
          </Col>

        </Row>
      </Container>
    </section>
  );
};

export default Contact;

