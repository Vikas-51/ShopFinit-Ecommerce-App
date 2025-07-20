import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CustomButton from "../Shared/CustomButton";
import headphone from "../../assets/hero/headphone.png";

const Hero = ({ handleOrderPopup }) => {
  return (
    <section
      className="py-5"
      id="hero"
      style={{
        background: "linear-gradient(135deg, #e9f1ffff, #bdd2faff)",
        borderRadius: "50px",
        boxShadow: "0 10px 40px rgba(133, 181, 230, 0.97)"

      }}
    >
      <Container>
        <Row className="align-items-center">
          <Col md={6} data-aos="fade-right">
            <h5 className="text-uppercase text-muted mb-3">Let's Explore</h5>
            <h1 className="display-4 fw-bold mb-3">Unique Gadgets</h1>
            <p className="mb-4">
              Discover the latest tech trends and stylish electronics designed
              for your modern lifestyle.
            </p>
            <CustomButton variant="primary" size="lg" onClick={handleOrderPopup}>
              Order Now
            </CustomButton>
          </Col>
          <Col
            md={6}
            data-aos="fade-left"
            className="text-center mt-4 mt-md-0"
            style={{ perspective: "1000px" }}
          >
            <img
              src={headphone}
              alt="Headphones"
              className="img-fluid hero-image"
              style={{
                maxHeight: "400px",
                transition: "transform 0.5s ease, box-shadow 0.5s ease",
                willChange: "transform",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "rotateY(10deg) scale(1.05)";
                e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "rotateY(0deg) scale(1)";
                e.currentTarget.style.boxShadow = "none";
              }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
