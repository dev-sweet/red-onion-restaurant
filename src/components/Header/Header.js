import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import logo from "../../images/logo2.png";
import { FiShoppingCart } from "react-icons/fi";
import "./Header.css";
const Header = () => {
  const history = useHistory();
  const handleSignup = () => {
    history.push("/signup");
  };
  return (
    <Navbar className='nav-navbar' expand='lg' sticky='top'>
      <Container>
        <Navbar.Brand as={Link} to='/'>
          <img className='brand-img' src={logo} alt='' />
        </Navbar.Brand>
        <Nav className='ms-auto'>
          <Nav.Link className='header-link' as={Link} to='/cart'>
            <FiShoppingCart />
          </Nav.Link>
          <Nav.Link className='header-link' as={Link} to='/login'>
            Login
          </Nav.Link>
        </Nav>
        <button className='primary-btn' onClick={handleSignup}>
          Signup
        </button>
      </Container>
    </Navbar>
  );
};

export default Header;
