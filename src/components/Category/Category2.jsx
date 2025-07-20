import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import watch from "../../assets/category/watch.png";
import gaming from "../../assets/category/gaming.png";
import speaker from "../../assets/category/speaker.png";

const categories = [
  {
    id: 4,
    name: "Smart Watches",
    image: watch,
    bgColor: "#fdf474ff",
  },
  {
    id: 5,
    name: "Gaming Gear",
    image: gaming,
    bgColor: "#fff3e0",
  },
  {
    id: 6,
    name: "Speakers",
    image: speaker,
    bgColor: "#ede7f6",
  },
];

const Category2 = () => {
  return (
    <section className="py-5" id="more-categories">
      <Container>
        <h2 className="text-center mb-5" data-aos="fade-up">
          More Categories
        </h2>
        <Row className="g-4">
          {categories.map((cat) => (
            <Col key={cat.id} xs={12} sm={6} md={4} data-aos="fade-up">
              <Card
                className="text-center shadow-sm border-0"
                style={{
                  backgroundColor: cat.bgColor,
                  borderRadius: "16px",
                  transition: "transform 0.3s ease",
                }}
              >
                <div
                  style={{
                    perspective: "1000px",
                  }}
                  className="py-4 d-flex justify-content-center"
                >
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="img-fluid category-img"
                    style={{
                      height: "200px",
                      objectFit: "contain",
                      transition: "transform 0.4s ease, box-shadow 0.4s ease",
                      willChange: "transform",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateZ(30px) scale(1.1)";
                      e.currentTarget.style.boxShadow =
                        "0 20px 35px rgba(0, 0, 0, 0.25)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateZ(0px) scale(1)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  />
                </div>
                <Card.Body>
                  <Card.Title className="fw-semibold">{cat.name}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Category2;
