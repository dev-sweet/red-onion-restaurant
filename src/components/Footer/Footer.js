import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <div className='footer'>
      <Container>
        <Row>
          <Col md={8}>
            <img className='footer-logo' src={logo} alt='' />
          </Col>
          <Col md={4}>
            <Row md={2}>
              <Col>
                <div className='footer-link-container'>
                  <Link className='footer-link' to='/'>
                    About Online food
                  </Link>
                  <Link className='footer-link' to='/'>
                    Read our blog
                  </Link>
                  <Link className='footer-link' to='/'>
                    Sign up to deliver
                  </Link>
                  <Link className='footer-link' to='/'>
                    Add your restaurant
                  </Link>
                </div>
              </Col>
              <Col>
                <div className='footer-link-container'>
                  <Link className='footer-link' to='/'>
                    Get help
                  </Link>
                  <Link className='footer-link' to='/'>
                    Read FAQs
                  </Link>
                  <Link className='footer-link' to='/'>
                    View all cities
                  </Link>
                  <Link className='footer-link' to='/'>
                    Restaurants near me
                  </Link>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className='pt-5'>
          <Col md={9}>
            <small className='text-secondary'>
              Copyright &copy; 2020 online food
            </small>
          </Col>
          <Col md={3}>
            <div className='bottom-link-container'>
              <Link className='footer-link' to='/'>
                Privacy Policy
              </Link>
              <Link className='footer-link' to='/'>
                Tearms of Use
              </Link>
              <Link className='footer-link' to='/'>
                Pricing
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Footer;
