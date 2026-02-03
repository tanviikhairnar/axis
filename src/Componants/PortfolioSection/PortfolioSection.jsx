import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./portfolio.css";

import cardImage1 from "../../assets/portfolio-1.webp";
import cardImage2 from "../../assets/portfolio-3.webp";
import cardImage3 from "../../assets/portfolio-5.webp";
import cardImage4 from "../../assets/portfolio-6.webp";
import cardImage5 from "../../assets/portfolio-2.webp";
import cardImage6 from "../../assets/portfolio-4.webp";

const portfolioCards = [
  {
    image: cardImage1,
    category: "Digital Design", 
    title: "Enterprise Digital Platform",
    client: "Fortune 500 Company",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    tags: ["UX Design", "Development", "Strategy"],
    reverse: false,
  },
  {
    image: cardImage2,
    category: "Development",
    title: "SaaS Product Suite",
    client: "Tech Startup",
    description: "At vero eos et accusamus et iusto odio dignissimos ducimus.",
    tags: ["Full Stack", "Cloud Architecture", "DevOps"],
    reverse: true,
  },
  {
    image: cardImage3,
    category: "Strategy",
    title: "Brand Transformation",
    client: "Global Corporation",
    description: "Excepteur sint occaecat cupidatat non proident.",
    tags: ["Brand Strategy", "Visual Identity", "Guidelines"],
    reverse: false,
  },
  {
    image: cardImage4,
    category: "Consulting",
    title: "Digital Transformation",
    client: "Healthcare Provider",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    tags: ["Process Optimization", "Technology Audit", "Implementation"],
    reverse: true,
  },
  {
    image: cardImage5,
    category: "Digital Design",
    title: "E-commerce Experience",
    client: "Retail Brand",
    description: "Duis aute irure dolor in reprehenderit in voluptate.",
    tags: ["UI/UX", "Interface Design", "Conversion Optimization"],
    reverse: false,
  },
  {
    image: cardImage6,
    category: "Development",
    title: "Mobile Application",
    client: "Financial Services",
    description: "Ut enim ad minim veniam quis nostrud exercitation.",
    tags: ["iOS", "Android", "API Integration"],
    reverse: true,
  },
];

function PortfolioSection() {
  const [activeTab, setActiveTab] = useState("All Work");

  const filteredCards =
    activeTab === "All Work"
      ? portfolioCards
      : portfolioCards.filter(card => card.category === activeTab);

  return (
    <section className="py-5 portfolio-section" id="portfolio">
      <Container fluid>

        <div className="text-center mb-5">
          <h6 className="text-uppercase text-muted">Portfolio</h6>
          <h2 className="fw-light">Check Our Portfolio</h2>
          <p className="text-muted w-75 mx-auto">
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit.
          </p>
        </div>

        <ul className="nav justify-content-center mb-5 portfolio-tabs">
          {["All Work", "Digital Design", "Development", "Strategy", "Consulting"].map(tab => (
            <li className="nav-item" key={tab}>
              <button
                className={`nav-link ${activeTab === tab ? "active" : "text-muted"}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            </li>
          ))}
        </ul>

        {filteredCards.map((item, index) => (
          <Row
            key={index}
            className={`align-items-center mb-5 ${item.reverse ? "flex-row-reverse" : ""}`}
          >
            <Col md={6} className="mb-4 mb-md-0">
              <div className="portfolio-image">
                <img src={item.image} alt={item.title} />

                <div className="portfolio-overlay">
                  <button className="overlay-btn">
                    <i className="bi bi-eye"></i>
                  </button>
                  <button className="overlay-btn">
                    <i className="bi bi-box-arrow-up-right"></i>
                  </button>
                </div>
              </div>
            </Col>

            <Col md={6}>
              <h6 className="text-uppercase text-muted mb-2">
                {item.category}
              </h6>
              <h3 className="fw-light">{item.title}</h3>
              <p className="text-muted">{item.description}</p>

              <p className="fw-semibold mb-1">{item.client}</p>
              <small className="text-muted">
                {item.tags.join(" · ")}
              </small>
            </Col>
          </Row>
        ))}

        <div className="text-center py-5 bg-light rounded">
          <h3 className="fw-light">Ready to elevate your business?</h3>
          <p className="text-muted">
            Let's discuss how we can transform your digital presence.
          </p>

          <div className="d-flex justify-content-center gap-3">
            <Button variant="dark">Start Conversation</Button>
            <Button variant="outline-dark">View All Projects</Button>
          </div>
        </div>

      </Container>
    </section>
  );
}

export default PortfolioSection;
