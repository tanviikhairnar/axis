import { useEffect, useState } from "react";
import { Container, Row, Col, Card, Spinner } from "react-bootstrap";
import useLocalStorage from "../../hooks/UseLocalstorage";

const API_URL = "https://fakestoreapi.com/products";

function Ecommerce() {
  const [products, setProducts] = useLocalStorage("ecommerce_products", []);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      if (products.length > 0) return;

      setLoading(true);
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("API fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [products, setProducts]);

  return (
    <section className="py-5 bg-light" id="ecommerce">
      <Container>
        <div className="text-center mb-5">
          <h2>Products</h2>
          <p className="text-muted">
            API data stored in localStorage
          </p>
        </div>

        {loading && (
          <div className="text-center mb-4">
            <Spinner animation="border" />
          </div>
        )}

        <Row>
          {products.map((item) => (
            <Col key={item.id} md={4} sm={6} xs={12} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Img
                  src={item.image}
                  alt={item.title}
                  style={{
                    height: "220px",
                    objectFit: "contain",
                    padding: "15px",
                  }}
                />

                <Card.Body>
                  <Card.Title style={{ fontSize: "1rem" }}>
                    {item.title}
                  </Card.Title>

                  <Card.Text style={{ fontSize: "0.9rem" }}>
                    {item.description.substring(0, 80)}...
                  </Card.Text>

                  <div className="d-flex justify-content-between">
                    <strong>${item.price}</strong>
                    <small className="text-muted">
                      ⭐ {item.rating?.rate}
                    </small>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {!loading && products.length === 0 && (
          <p className="text-center text-muted">No products found</p>
        )}
      </Container>
    </section>
  );
}

export default Ecommerce;

