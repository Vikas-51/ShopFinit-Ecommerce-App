import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <style>{`
        .footer-glass {
          background: rgba(0, 123, 255, 0.08); /* blue tint */
          backdrop-filter: blur(14px) saturate(160%);
          -webkit-backdrop-filter: blur(14px) saturate(160%);
          border-top: 1px solid rgba(13, 110, 253, 0.2);
          box-shadow: 0 -4px 24px rgba(13, 110, 253, 0.2);
          transition: all 0.3s ease;
        }

        body.dark .footer-glass {
          background: rgba(20, 20, 35, 0.6);
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 -4px 24px rgba(255, 255, 255, 0.05);
        }

        .footer-title {
          font-weight: 700;
          font-size: 1.5rem;
          color: #0d6efd;
        }

        .footer-about {
          font-size: 0.95rem;
          color: #66b2ff;
        }

        .footer-copy,
        .footer-made {
          font-size: 0.85rem;
          color: #66b2ff;
        }

        .footer-socials a {
          font-size: 1.5rem;
          margin: 0 0.5rem;
          color: #0d6efd;
          transition: transform 0.3s ease, filter 0.3s ease, color 0.3s ease;
          filter: drop-shadow(0 2px 6px rgba(13, 110, 253, 0.4));
        }

        .footer-socials a:hover {
          transform: scale(1.25) translateY(-3px);
          color: #007bff;
          filter: drop-shadow(0 6px 12px rgba(13, 110, 253, 0.5));
        }

        body.dark .footer-socials a {
          color: #66b2ff;
          filter: drop-shadow(0 2px 6px rgba(102, 178, 255, 0.4));
        }

        body.dark .footer-socials a:hover {
          color: #ffffff;
          filter: drop-shadow(0 6px 12px rgba(255, 255, 255, 0.6));
        }
      `}</style>

      <footer className="footer-glass text-white mt-5">
        <Container>
          <Row className="py-4">
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
    </>
  );
};

export default Footer;
