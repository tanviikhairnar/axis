import { useState, useEffect } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import "./about.css";

import businessImage2 from "../../assets/about-square-12.webp";
import awardIcon from "../../assets/medal.png";

const Counter = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const frameDuration = 16;
    const totalFrames = duration / frameDuration;
    const increment = end / totalFrames;

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, frameDuration);

    return () => clearInterval(timer);
  }, [end, duration]);

  return <>{count}</>;
};

const About = () => {
  return (
    <section id="about" className="about-section">
      <Container >
        <div className="text-center mb-5">
          <small className="text-uppercase text-muted letter-spacing">
            ABOUT
          </small>
          <h2 className="fw-light display-6 mt-2">About Us</h2>
          <p className="text-muted">
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit. Sed ut perspiciatis <br /> unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam
          </p>
        </div>
        <Row className="align-items-center gx-5">
          <Col lg={6} className="about-content">
            <h2 className="about-title">
              Crafting Excellence Through Innovation and Dedication
            </h2>

            <p className="about-lead">
              We are passionate professionals committed to delivering exceptional results that exceed expectations and drive meaningful transformation.
            </p>

            <p className="about-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>

            <p className="about-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>

            <Row className="stats-row">
              <Col sm={4}>
                <h3><Counter end={15} /></h3>
                <span>Years Experience</span>
              </Col>
              <Col sm={4}>
                <h3><Counter end={850} /></h3>
                <span>Projects Completed</span>
              </Col>
              <Col sm={4}>
                <h3><Counter end={240} /></h3>
                <span>Happy Clients</span>
              </Col>
            </Row>

            <Button className="about-btn">
              Meet Our Team
            </Button>
          </Col>

          <Col lg={6} className="about-image-wrapper">
            <div className="image-box">
              <img
                src={businessImage2}
                alt="Business meeting"
                className="about-image"
              />

              <Card className="award-card">
                <Card.Body className="d-flex align-items-center gap-3">
                  <img src={awardIcon} width={36} alt="award" />
                  <div>
                    <strong>Award Winning</strong>
                    <p>Recognized for excellence</p>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;



