import React, { useState, useEffect } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Container,
  Badge,
} from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import DarkMode from "../Navbar/DarkMode";

const MyNavbar = ({ cartCount, handleOrderPopup }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [bounce, setBounce] = useState(false);

  // Trigger animation on cart update
  useEffect(() => {
    if (cartCount > 0) {
      setBounce(true);
      const timer = setTimeout(() => setBounce(false), 600); // reset after animation
      return () => clearTimeout(timer);
    }
  }, [cartCount]);

  return (
      <Navbar
        expand="lg"
        bg="light"
        variant="light"
        fixed="top"        
        className="py-2 shadow-sm"
      >
      <Container>
        <Navbar.Brand href="/" className="d-flex align-items-center">
          <span className="fw-bold fs-4 text-primary">ShopFinit</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="eshop-navbar" />
        <Navbar.Collapse id="eshop-navbar">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#shop">Shop</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#blogs">Blogs</Nav.Link>

            <NavDropdown
              title="Quick Links"
              id="quicklinks-dropdown"
              show={showDropdown}
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
              className="hover-dropdown"
            >
              <NavDropdown.Item href="#trending">Trending Products</NavDropdown.Item>
              <NavDropdown.Item href="#best-selling">Best Selling</NavDropdown.Item>
              <NavDropdown.Item href="#top-rated">Top Rated</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <Nav>
            <Nav.Link
            onClick={handleOrderPopup}
            className={`position-relative cart-icon ${bounce ? "cart-bounce" : ""}`}
          >
            <FaShoppingCart size={20} />
            {cartCount > 0 && (
              <Badge
                bg="danger"
                pill
                className="position-absolute top-0 start-100 translate-middle"
              >
                {cartCount}
              </Badge>
            )}
          </Nav.Link>


            <DarkMode />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
