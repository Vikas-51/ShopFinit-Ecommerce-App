import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import amazon from "../../assets/brand/amazon.jpg";
import shopify from "../../assets/brand/shopify.png";
import fedex from "../../assets/brand/fedex.png";
import paypal from "../../assets/brand/paypal.png";
import apple from "../../assets/brand/apple.png";
import google from "../../assets/brand/google.png";

const brands = [
  amazon,
  shopify,
  fedex,
  paypal,
  apple,
  google,
];

const Partners = () => {
  return (
    <section className="py-3 px-3 bg-white" id="partners">
      <Container>
        <h2 className="text-center mb-4 fw-bold" data-aos="fade-up">
          Our Trusted Partners
        </h2>
        <Row className="justify-content-center text-center g-4">
          {brands.map((brand, idx) => (
            <Col
              xs={6}
              sm={4}
              md={2}
              key={idx}
              className="d-flex justify-content-center align-items-center"
              data-aos="zoom-in"
            >
              <div
                className="brand-logo-wrapper"
                style={{
                  background: "#f8f9fa",
                  borderRadius: "16px",
                  padding: "0.75rem", 
                  transition: "transform 0.4s ease, box-shadow 0.4s ease",
                  perspective: "1000px",
                  width: "100%",
                  maxWidth: "130px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.1) rotateY(6deg)";
                  e.currentTarget.style.boxShadow =
                    "0 20px 40px rgba(0,0,0,0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1) rotateY(0deg)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <img
                  src={brand}
                  alt={`Brand ${idx + 1}`}
                  className="img-fluid"
                  style={{
                    maxHeight: "80px", // increased image size
                    objectFit: "contain",
                    filter: "grayscale(100%)",
                    transition: "filter 0.3s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.filter = "none")}
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.filter = "grayscale(100%)")
                  }
                />
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Partners;
