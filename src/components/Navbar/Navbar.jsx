import React, { useState, useEffect } from "react";
import {
  Navbar,
  Nav,
  Container,
  Badge,
  NavDropdown,
} from "react-bootstrap";
import {
  AiOutlineHome,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { BsShop, BsGear, BsNewspaper } from "react-icons/bs";
import { BiCategory } from "react-icons/bi";
import { FiTrendingUp } from "react-icons/fi";
import { MdOutlineStarRate } from "react-icons/md";
import { RiFlashlightLine } from "react-icons/ri";
import DarkMode from "../Navbar/DarkMode";

const MyNavbar = ({ cartCount, handleOrderPopup }) => {
  const [bounce, setBounce] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (cartCount > 0) {
      setBounce(true);
      const timer = setTimeout(() => setBounce(false), 600);
      return () => clearTimeout(timer);
    }
  }, [cartCount]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style>{`
        .glass-navbar {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(14px) saturate(180%);
          -webkit-backdrop-filter: blur(14px) saturate(180%);
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
          z-index: 1000;
          transition: all 0.3s ease;
        }

        .navbar-scrolled {
          padding-top: 0.3rem !important;
          padding-bottom: 0.3rem !important;
          background: rgba(255, 255, 255, 0.85) !important;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1) !important;
        }

        body.dark .glass-navbar {
          background: rgba(30, 30, 30, 0.6);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .nav-link-icon {
          display: flex;
          align-items: center;
          gap: 8px;
          font-weight: 500;
          transition: color 0.2s ease;
        }

        .nav-link-icon:hover {
          color: #0d6efd;
        }

        .modern-icon {
          color: #0d6efd;
          filter: drop-shadow(0 3px 6px rgba(0, 0, 0, 0.3));
          transition: transform 0.2s ease, filter 0.3s ease;
        }

        .modern-icon:hover {
          transform: scale(1.2) translateY(-2px);
          filter: drop-shadow(0 6px 10px rgba(0, 0, 0, 0.5));
        }

        .cart-bounce {
          animation: bounce 0.6s ease;
        }

        @keyframes bounce {
          0% { transform: translateY(0); }
          30% { transform: translateY(-5px); }
          60% { transform: translateY(3px); }
          100% { transform: translateY(0); }
        }

        .pulse {
          animation: pulse 2s infinite ease-in-out;
        }

        @keyframes pulse {
          0% { transform: scale(1); filter: drop-shadow(0 0 4px rgba(13, 110, 253, 0.4)); }
          50% { transform: scale(1.15); filter: drop-shadow(0 0 8px rgba(13, 110, 253, 0.7)); }
          100% { transform: scale(1); filter: drop-shadow(0 0 4px rgba(13, 110, 253, 0.4)); }
        }

        .dropdown-menu {
          opacity: 0;
          transform: translateY(10px);
          transition: opacity 0.3s ease, transform 0.3s ease;
          display: block !important;
          pointer-events: none;
          border-radius: 10px;
          padding: 0.5rem;
          backdrop-filter: blur(10px);
          background: rgba(255, 255, 255, 0.95);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
        }

        .show > .dropdown-menu {
          opacity: 1;
          transform: translateY(0);
          pointer-events: auto;
        }

        .dropdown-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: 500;
        }

        .dropdown-item:hover {
          background: rgba(0, 0, 0, 0.05);
        }

        body.dark .dropdown-menu {
          background: rgba(40, 40, 40, 0.95);
          color: #fff;
        }

        body.dark .dropdown-item:hover {
          background: rgba(255, 255, 255, 0.08);
        }
      `}</style>

      <Navbar expand="lg" fixed="top" className={`py-2 glass-navbar ${isScrolled ? "navbar-scrolled" : ""}`}>
        <Container>
          <Navbar.Brand href="/" className="d-flex align-items-center">
            <span className="fw-bold fs-4 text-primary">ShopFinit</span>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="eshop-navbar" />
          <Navbar.Collapse id="eshop-navbar">
            <Nav className="me-auto">
              <Nav.Link href="/" className="nav-link-icon">
                <AiOutlineHome size={18} /> Home
              </Nav.Link>
              <Nav.Link href="#products" className="nav-link-icon">
                <BsShop size={18} /> Shop
              </Nav.Link>
              <Nav.Link href="#services" className="nav-link-icon">
                <BsGear size={18} /> Services
              </Nav.Link>
              <Nav.Link href="#blogs" className="nav-link-icon">
                <BsNewspaper size={18} /> Blogs
              </Nav.Link>

              <NavDropdown
                id="quicklinks-dropdown"
                title={
                  <span className="d-flex align-items-center gap-2">
                    <BiCategory size={18} className="pulse" />
                    Quick Links
                  </span>
                }
                show={showDropdown}
                onMouseEnter={() => setShowDropdown(true)}
                onMouseLeave={() => setShowDropdown(false)}
              >
                <NavDropdown.Item href="#trending">
                  <FiTrendingUp size={16} color="orangered" />
                  Trending
                </NavDropdown.Item>
                <NavDropdown.Item href="#best-selling">
                  <RiFlashlightLine size={16} color="goldenrod" />
                  Best Selling
                </NavDropdown.Item>
                <NavDropdown.Item href="#top-rated">
                  <MdOutlineStarRate size={18} color="gold" />
                  Top Rated
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>

            <Nav>
              <Nav.Link
                onClick={handleOrderPopup}
                className={`position-relative cart-icon ${bounce ? "cart-bounce" : ""}`}
              >
                <AiOutlineShoppingCart size={24} className="modern-icon" />
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
    </>
  );
};

export default MyNavbar;
