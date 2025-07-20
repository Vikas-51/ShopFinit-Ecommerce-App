import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <Container>
        <Row>
          <Col md={6}>
            <h5>ShopFinit</h5>
            <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
          </Col>
          <Col md={6} className="text-md-end">
            <p>Made with ❤️ by ShopFinit Team</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
