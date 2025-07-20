import React, { useState } from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import CustomButton from "../Shared/CustomButton";
import headphone from "../../assets/hero/headphone.png";
import mac from "../../assets/hero/mac.png";
import watch from "../../assets/hero/watch1.png";
import vr from "../../assets/hero/vr.png";

const productData = [
  {
    name: "Headphones",
    description: "Experience immersive sound with our premium headphones.",
    image: headphone,
  },
  {
    name: "MacBook Pro",
    description: "Powerful performance packed in a sleek design.",
    image: mac,
  },
  {
    name: "Smart Watch",
    description: "Stay connected and fit with smart technology on your wrist.",
    image: watch,
  },
  {
    name: "VR Headset",
    description: "Step into the future with our cutting-edge virtual reality.",
    image: vr,
  },
];

const Hero = ({ handleOrderPopup }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      className="py-5"
      id="hero"
      style={{
        background: "linear-gradient(135deg, #e9f1ffff, #bdd2faff)",
        borderRadius: "50px",
        boxShadow: "0 10px 40px rgba(133, 181, 230, 0.97)",
        minHeight: "550px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container>
        <Row className="align-items-center">
          <Col md={6} data-aos="slide-right">
            <h5 className="text-uppercase text-muted mb-3">Let's Explore</h5>
            <h1 className="display-4 fw-bold mb-3">
              {productData[activeIndex].name}
            </h1>
            <p className="mb-4">{productData[activeIndex].description}</p>
            <CustomButton variant="primary" size="lg" onClick={handleOrderPopup}>
              Order Now
            </CustomButton>
          </Col>
          <Col
            md={6}
            data-aos="slide-left"
            className="text-center mt-4 mt-md-0"
            style={{ perspective: "1000px" }}
          >
            <Carousel
              // Slide transition
              controls={false}
              indicators={false}
              interval={2000}
              pause={false}
              activeIndex={activeIndex}
              onSelect={(selectedIndex) => setActiveIndex(selectedIndex)}
            >
              {productData.map((product, index) => (
                <Carousel.Item key={index}>
                  <img
                    src={product.image}
                    alt={product.name}
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
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
