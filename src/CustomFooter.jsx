import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import WebTitleContext from './WebTitleContext';
import { Facebook } from 'react-bootstrap-icons';
import { Instagram } from 'react-bootstrap-icons';
import { Youtube } from 'react-bootstrap-icons';
import { TwitterX } from 'react-bootstrap-icons';
import { Pinterest } from 'react-bootstrap-icons';
import { Linkedin } from 'react-bootstrap-icons';
import AboutUsImage1 from './assets/aboutus_image1.png';

const CustomFooter = () => {
  const webTitle = useContext(WebTitleContext);

  return (
    <footer className="footer-custom">
      <Container className="p-5">
        <Row>
          <Col className="text-md-left text-center" md={4}>
            <a href='/'><img src={AboutUsImage1} alt='icon' className='footer-image'></img></a>
          </Col>
          <Col className="text-md-left text-center" md={4}>
            <h5 className='footer-heading5'>Discover {webTitle}</h5>
            <p>Nourishing meals, personalized exercise plans, and well-being support in one place.<br></br>
              Join us to embrace a healthier lifestyle.</p>
          </Col>
          <Col className="text-md-left text-center" md={4}>
            <h5 className='footer-heading5'>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/recipe" className='link-no-decoration'>Recipes Finder</a></li>
              <li><a href="/bmi" className='link-no-decoration'>BMI Calculator</a></li>
              <li><a href="/workout" className='link-no-decoration'>Workout Plan</a></li>
              <li><a href="/pricing" className='link-no-decoration'>Pricing Plan</a></li>
              <li><a href="/about" className='link-no-decoration'>About Us</a></li>
            </ul>
          </Col>
        </Row>
        <Row className='footer-custom-icon-row justify-content-md-center p-3'>
          <Col className='footer-custom-icon-col' lg={2} xs={4}><a href='/'><Facebook size={30} /></a></Col>
          <Col className='footer-custom-icon-col' lg={2} xs={4}><a href='/'><Youtube size={30} /></a></Col>
          <Col className='footer-custom-icon-col' lg={2} xs={4}><a href='/'><Instagram size={30} /></a></Col>
          <Col className='footer-custom-icon-col' lg={2} xs={4}><a href='/'><TwitterX size={30} /></a></Col>
          <Col className='footer-custom-icon-col' lg={2} xs={4}><a href='/'><Pinterest size={30} /></a></Col>
          <Col className='footer-custom-icon-col' lg={2} xs={4}><a href='/'><Linkedin size={30} /></a></Col>
        </Row>
        <Row className='footer-custom-row'>
          <Col className="footer-custom-col py-3">
            <a href='/' className='link-no-decoration'><p>Team and condititons</p></a>
          </Col>
          <Col className="footer-custom-col py-3">
            <a href='/' className='link-no-decoration'><p>Copyright</p></a>
          </Col>
          <Col className="footer-custom-col py-3">
            <a href='/' className='link-no-decoration'><p>Privacy</p></a>
          </Col>
          <Col className="footer-custom-col py-3">
            <a href='/' className='link-no-decoration'><p>Disclaimer</p></a>
          </Col>
        </Row>
        <Row className='footer-custom-row p-3'>
          <Col className="text-center">
            <p>&copy; {new Date().getFullYear()} {webTitle}. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default CustomFooter;