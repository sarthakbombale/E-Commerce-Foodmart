// src/components/Footer.jsx
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Facebook, Twitter, Youtube, Instagram } from "lucide-react";
import Logo from "../assets/logo.png"; // Adjust path based on your folder structure

const Footer = () => {
  return (
    <footer className="text-dark pt-5 pb-3 mt-5" style={{ backgroundColor: "#f8f9fa" }}>
      <Container>
        <Row className="align-items-top">
          {/* --- Logo + Social Icons --- */}
          <Col md={4} className="mb-4 text-center text-md-start">
            <img src={Logo} alt="Logo" className="mb-4" style={{ width: "150px" }} />
            <div className="d-flex justify-content-md-start justify-content-center gap-4 mx-md-2">
              <a href="#" className="text-dark"><Facebook /></a>
              <a href="#" className="text-dark"><Twitter /></a>
              <a href="#" className="text-dark"><Youtube /></a>
              <a href="#" className="text-dark"><Instagram /></a>
            </div>
          </Col>

          {/* --- Column 1: Ultras --- */}
          <Col md={2} className="mb-4">
            <h6 className="fw-bold" style={{ fontSize: "1.2rem" }}>Ultras</h6>
            <ul className="list-unstyled text-muted">
              <li><a href="#" className="text-decoration-none text-muted">About us</a></li>
              <li><a href="#" className="text-decoration-none text-muted">Conditions</a></li>
              <li><a href="#" className="text-decoration-none text-muted">Our Journals</a></li>
              <li><a href="#" className="text-decoration-none text-muted">Careers</a></li>
              <li><a href="#" className="text-decoration-none text-muted">Affiliate Programme</a></li>
              <li><a href="#" className="text-decoration-none text-muted">Ultras Press</a></li>
            </ul>
          </Col>

          {/* --- Column 2: Customer Service --- */}
          <Col md={3} className="mb-4">
            <h6 className="fw-bold" style={{ fontSize: "1.2rem" }}>Customer Service</h6>
            <ul className="list-unstyled text-muted">
              <li><a href="#" className="text-decoration-none text-muted">FAQ</a></li>
              <li><a href="#" className="text-decoration-none text-muted">Contact</a></li>
              <li><a href="#" className="text-decoration-none text-muted">Privacy Policy</a></li>
              <li><a href="#" className="text-decoration-none text-muted">Returns & Refunds</a></li>
              <li><a href="#" className="text-decoration-none text-muted">Cookie Guidelines</a></li>
              <li><a href="#" className="text-decoration-none text-muted">Delivery Information</a></li>
            </ul>
          </Col>

          {/* --- Column 3: Subscribe --- */}
          <Col md={3} className="mb-4">
            <h6 className="fw-bold" style={{ fontSize: "1.2rem" }}>Subscribe Us</h6>
            <p className="text-muted" style={{ lineHeight: "1.5" }}>
              Subscribe to our newsletter to get updates about our grand offers.
            </p>
            <form className="d-flex">
              <input
                type="email"
                className="form-control form-control-sm me-2"
                placeholder="Email Address"
              />
              <button type="submit" className="btn btn-dark btn-sm">
                Subscribe
              </button>
            </form>
          </Col>
        </Row>

        <hr />

        {/* --- Copyright --- */}
        <Row>
          <Col className="text-center small text-muted py-2">
            © {new Date().getFullYear()} FoodMart. All rights reserved.
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
