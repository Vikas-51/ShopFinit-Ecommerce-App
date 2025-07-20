import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaTruck, FaShieldAlt, FaSyncAlt } from "react-icons/fa";

const services = [
  {
    id: 1,
    icon: <FaTruck />,
    title: "Free Shipping",
    desc: "On orders over $100",
    bg: "#e3f2fd",
  },
  {
    id: 2,
    icon: <FaShieldAlt />,
    title: "Secure Payment",
    desc: "100% secure payment",
    bg: "#e8f5e9",
  },
  {
    id: 3,
    icon: <FaSyncAlt />,
    title: "Easy Return",
    desc: "30-day money-back guarantee",
    bg: "#fff3e0",
  },
];

const Services = () => {
  return (
    <section className="py-5" id="services">
      <Container>
        <Row className="g-4">
          {services.map((service) => (
            <Col
              key={service.id}
              md={4}
              data-aos="fade-up"
              className="text-center"
            >
              <div
                className="service-card"
                style={{
                  backgroundColor: service.bg,
                  borderRadius: "20px",
                  padding: "10px",
                  transition: "transform 0.4s ease, box-shadow 0.4s ease",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.05)",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px) scale(1.03)";
                  e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.05)";
                }}
              >
                <div
                  className="icon-wrapper mb-3"
                  style={{
                    fontSize: "2.5rem",
                    color: "#0d6efd",
                    background: "#ffffffaa",
                    borderRadius: "50%",
                    padding: "15px",
                    display: "inline-block",
                    transition: "transform 0.3s ease",
                  }}
                >
                  {service.icon}
                </div>
                <h5 className="fw-bold mt-2">{service.title}</h5>
                <p className="text-muted">{service.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
