import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { CertificateCard } from "./CertificateCard"; // You would need to create a CertificateCard component similar to ProjectCard
import certImg1 from "../assets/img/cerificate1.jpg";
import certImg4 from "../assets/img/certificate4.png";
import certImg2 from "../assets/img/certificate2.png";
import certPdf1 from "../assets/img/certificate1.pdf";
import certPdf2 from "../assets/img/certificate2.pdf";
import certPdf4 from "../assets/img/certificate4.pdf";

// ... import other certificate images

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Certificates = () => {
  const certificatesTab1 = [
    {
      title: "Web development",
      description: "This certificate showcases my skills in Web development",
      imgUrl: certImg1,
      viewDemoLink: certPdf1,
      // ... other links or data
    },
    {
      title: "Full Stack Development",
      description: "This certificate highlights my expertise in Full Stack Development",
      imgUrl: certImg2,
      viewDemoLink: certPdf2,
      // ... other links or data
    },
    {
        title: "HackerRank",
        description: "This certificate recognizes my proficiency in CSS",
        imgUrl: certImg4,
        viewDemoLink: certPdf4,
        // ... other links or data
      },
    // ... add more certificate objects
  ];

  const certificatesTab2 = [
    // ... similar array of certificate objects for Tab 2
  ];

  const certificatesTab3 = [
    // ... similar array of certificate objects for Tab 3
  ];

  return (
    <section className="certificate" id="certificate">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Certificates</h2>
                  <p>"Immerse yourself in my enchanted realm of web development where HTML, CSS, and JavaScript intertwine like spells. <br />My certificates are the proof that I'm not just coding, but crafting virtual realms with meticulous attention to detail. <br />From transforming mere lines of code into elegant designs to conjuring complex full-stack wonders,  <br />my journey through the digital landscape is an adventure fueled by creativity and powered by expertise."</p>
                  <Tab.Container id="certificates-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">#1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">#2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">#3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            certificatesTab1.map((certificate, index) => {
                              return (
                                <CertificateCard
                                  key={index}
                                  {...certificate}
                                />
                              );
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {
                            certificatesTab2.map((certificate, index) => {
                              return (
                                <CertificateCard
                                  key={index}
                                  {...certificate}
                                />
                              );
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {
                            certificatesTab3.map((certificate, index) => {
                              return (
                                <CertificateCard
                                  key={index}
                                  {...certificate}
                                />
                              );
                            })
                          }
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background"></img>
    </section>
  );
};
