import React, { useContext } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Container } from 'react-bootstrap';
import WebTitleContext from './WebTitleContext';

const CustomNavbar = () => {
  const webTitle = useContext(WebTitleContext);

  return (
      <Navbar className="navbar-custom" expand="lg" fixed='top'>
          <Container>
            <Navbar.Brand href="/">{webTitle}</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="/recipe">Recipes Finder</Nav.Link>
                    <Nav.Link href="/bmi">BMI Calculator</Nav.Link>
                    <Nav.Link href="/workout">Workout Recommendation</Nav.Link>
                    <Nav.Link href="/pricing">Pricing Plan</Nav.Link>
                    <Nav.Link href="/about">About Us</Nav.Link>
                </Nav>
            </Navbar.Collapse>
          </Container>
      </Navbar>
  );
};

export default CustomNavbar;