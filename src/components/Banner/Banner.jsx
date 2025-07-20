import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CustomButton from "../Shared/CustomButton";
import Tilt from "react-parallax-tilt"; 

const Banner = ({ data }) => {
  const {
    discount,
    title,
    date,
    image,
    title2,
    title3,
    title4,
    bgColor,
  } = data;

  return (
    <section
      className="py-5"
      style={{ backgroundColor: bgColor }}
      data-aos="zoom-in"
    >
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-white mb-4 mb-md-0">
            <h5 className="text-uppercase fw-bold">{discount}</h5>
            <h2>{title}</h2>
            <p className="mb-1">{date}</p>
            <h3 className="fw-bold">{title2}</h3>
            <h4 className="mb-3">{title3}</h4>
            <p>{title4}</p>
            <CustomButton variant="light">Shop Now</CustomButton>
          </Col>

          <Col md={6} className="text-center">
            <Tilt
              glareEnable={true}
              glareMaxOpacity={0.3}
              scale={1.05}
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              transitionSpeed={1000}
              className="d-inline-block"
            >
              <img
                src={image}
                alt={title2}
                className="img-fluid"
                style={{
                  maxHeight: "300px",
                  objectFit: "contain",
                }}
              />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
