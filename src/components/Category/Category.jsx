import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import vr from "../../assets/category/vr.png";
import earphone from "../../assets/category/earphone.png";
import macbook from "../../assets/category/macbook.png";

const categories = [
  {
    id: 1,
    name: "VR Headsets",
    image: vr,
    bgColor: "#e0f7fa", // Light cyan
  },
  {
    id: 2,
    name: "Earphones",
    image: earphone,
    bgColor: "#f86b9aff", // Soft pink
  },
  {
    id: 3,
    name: "Laptops",
    image: macbook,
    bgColor: "#c9a7fcff", // Lavender gray
  },
];


const Category = () => {
  return (
<section className="py-5" id="categories">
  <Container>
    <h2 className="text-center mb-5" data-aos="fade-up">Categories</h2>
    <Row className="g-4">
      {categories.map((cat) => (
        <Col key={cat.id} xs={12} sm={6} md={4} data-aos="fade-up">
          <Card
            className="text-center shadow-sm border-0"
            style={{
              backgroundColor: cat.bgColor,
              transition: "transform 0.3s ease",
              borderRadius: "16px",
            }}
          >
            <div
              style={{ perspective: "1000px" }}
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
                  e.currentTarget.style.transform = "translateZ(20px) scale(1.1)";
                  e.currentTarget.style.boxShadow = "0 15px 25px rgba(0,0,0,0.25)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateZ(0) scale(1)";
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

export default Category;
