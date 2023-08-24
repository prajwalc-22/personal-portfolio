import { Container, Row, Col } from "react-bootstrap";


import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import github from '../assets/img/github.svg';
import envelope from '../assets/img/envelope-solid.svg';
import linkdin from '../assets/img/linkedin.svg';
import twitter from "../assets/img/twitter.svg";
import download from "../assets/img/download-solid.svg";
import facebook from "../assets/img/facebook.svg";
import contact from "../assets/img/contact-img.svg";
import instagram from "../assets/img/instagram.svg";
import { Link } from 'react-scroll';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          
          <Col size={12} sm={6}>
          <Link to="home" smooth={true} duration={500}>
          <span className="ppp">Prajwal C</span>
          </Link>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/prajwalc-22-/"><img src={linkdin} alt="Icon" /></a>
              <a href="https://github.com/prajwalc-22"><img src={github} alt="Icon" /></a>
              <a href="mailto:prajwalc.sagar22@gmail.com"><img src={envelope} alt="Icon" /></a>
              <a href="https://twitter.com/_Prajwal_C_"><img src={twitter} alt="Icon" /></a>
            </div>
            <p>Copyright &#169; 2023 Prajwal C. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}