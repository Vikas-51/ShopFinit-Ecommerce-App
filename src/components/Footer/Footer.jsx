import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-glass text-white mt-5">
      <Container>
        <Row className="py-2">
          <Col md={6}>
            <h5 className="footer-title">ShopFinit</h5>
            <p className="footer-about">
              ShopFinit is a modern e-commerce platform built to deliver an intuitive, secure, and seamless online shopping experience.
            </p>
            <p className="footer-copy">
              &copy; {new Date().getFullYear()} All rights reserved.
            </p>
          </Col>
          <Col md={6} className="text-md-end mt-4 mt-md-0">
            <p className="footer-made">Made with ❤️ by ShopFinit Team</p>
            <div className="footer-socials">
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <FaTwitter />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                <FaLinkedinIn />
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer">
                <FaGithub />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
