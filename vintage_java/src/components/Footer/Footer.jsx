// Footer.jsx

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="text-center text-md-left py-4">
          <Col md={4} className="mb-3 mb-md-0">
            <h5 className="footer-title">About RetroBrew</h5>
            <p className="footer-text">
              At RetroBrew, we bring you the finest coffee experience. Whether
              you're looking for a place to relax, work, or catch up with
              friends, we have the perfect ambiance for you.
            </p>
          </Col>
          <Col md={4} className="mb-3 mb-md-0">
            <h5 className="footer-title">Quick Links</h5>
            <ul className="footer-list">
              <li>
                <a href="/retrobrew" className="footer-link">
                  Home
                </a>
              </li>
              <li>
                <a href="/brewcoffeee" className="footer-link">
                  Menu
                </a>
              </li>

              <li>
                <a href="/contact" className="footer-link">
                  Contact
                </a>
              </li>
            </ul>
          </Col>
          <Col md={4} className="mb-3 mb-md-0">
            <h5 className="footer-title">Contact Us</h5>
            <ul className="footer-list">
              <li>
                <i className="fas fa-map-marker-alt footer-icon"></i> 123 Coffee
                St, Brewtown
              </li>
              <li>
                <i className="fas fa-phone-alt footer-icon"></i>
                +91 1234567890
              </li>
              <li>
                <i className="fas fa-envelope footer-icon"></i>{" "}
                rithikraja28.rr@gmail.com
              </li>
            </ul>
          </Col>
        </Row>
        <Row className="text-center py-3">
          <Col>
            <p className="footer-text mb-0">
              &copy; {new Date().getFullYear()} RetroBrew. All Rights Reserved.
            </p>
          </Col>
          <Col>

            <p className="footer-text mb-0">
              Designed and Developed by Rithik Raja S
            </p>
            <div className="d-flex justify-content-center mb-3">
              <Link
                target="_blank"
                to="https://www.linkedin.com/in/rithik-raja-s/"
                className="m-2"
              >
                <FaLinkedin size={24} />
              </Link>
              <Link
                target="_blank"
                to="https://github.com/RithikRaja28"
                className="m-2"
              >
                <FaGithub size={24} className="text-dark" />
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
