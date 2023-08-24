import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";



import projImg10 from "../assets/img/project-img10.png";
import projImg11 from "../assets/img/project-img11.png";
import projImg12 from "../assets/img/project-img12.png";
import projImg13 from "../assets/img/project-img13.png";
import projImg14 from "../assets/img/project-img14.png";
import projImg15 from "../assets/img/project-img15.png";
import projImg16 from "../assets/img/project-img16.png";
import projImg17 from "../assets/img/project-img17.png";
import projImg18 from "../assets/img/project-img18.png";


import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projectsTab1 = [
    {
      title: "Promptopia",
      description: "Creative prompts powered by AI, sparking imaginative ideas.",
      imgUrl: projImg12,
      viewDemoLink: "https://github.com/prajwalc-22/Promptopia",
      liveDemoLink: "https://promptopia-lewviarpo-prajwalc-22.vercel.app/",
    },
    {
      title: "GPT-3",
      description: " Unleashing the power of OpenAI's language model for diverse applications",
      imgUrl: projImg11,
      viewDemoLink: "https://github.com/prajwalc-22/gpt3_jsm", 
      liveDemoLink: "https://gpt3-jsm-gamma.vercel.app/", 
    },
    {
      title: "GERICHT",
      description: " A seamless blend of fine dining and digital innovation for restaurants",
      imgUrl: projImg13,
      viewDemoLink: "https://github.com/prajwalc-22/gerich-restaurant", 
      liveDemoLink: "https://gerich-restaurant-two.vercel.app/", 
    },
  ];
  const projectsTab2 = [
    {
      title: "My-Portfolio",
      description: "Elevating ideas through code and design, showcasing versatile skills",
      imgUrl: projImg16,
      viewDemoLink: "https://github.com/prajwalc-22/My-Portfolio", 
      liveDemoLink: "https://prajwalc-22.github.io/My-Portfolio/", 
    },
    {
      title: "My-Portfolio",
      description: " Evolving creativity and technology in a dynamic digital showcase",
      imgUrl: projImg10,
      viewDemoLink: "#", 
      liveDemoLink: "#", 
    },
    {
      title: "My-Portfolio",
      description: " Fusion of design and development, presenting captivating digital ",
      imgUrl: projImg15,
      viewDemoLink: "https://github.com/prajwalc-22/My-Portfolio-22", 
      liveDemoLink: "https://my-portfolio-22-plum.vercel.app/", 
    },
  ];

  const projectsTab3 = [
    {
      title: "Tindog",
      description: "Digital networking for dog lovers, connecting canine companions",
      imgUrl: projImg14,
      viewDemoLink: "https://github.com/prajwalc-22/Tindog-Website", 
      liveDemoLink: "https://prajwalc-22.github.io/Tindog-Website/", 
    },
    {
      title: "MovieLand",
      description: "Discover and explore movies seamlessly with interactive searching",
      imgUrl: projImg17,
      viewDemoLink: "https://github.com/prajwalc-22/movieland-22", 
      liveDemoLink: "https://github.com/prajwalc-22/movieland-22", 
    },
    {
      title: "Visualize Dijkstra's Algorithm",
      description: "Navigational insights through visualized pathfinding solutions",
      imgUrl: projImg18,
      viewDemoLink: "https://github.com/prajwalc-22/pathfinding-visualizer",
      liveDemoLink: "https://pathfinding-visualizer-wheat.vercel.app/", 
    },
  ];


  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>"Demonstrating a versatile skill set, My portfolio features an assortment of projects including full-stack web applications, <br />UI/UX design Landing Page,Portfolios,clone websites developed using HTML, CSS, JavaScript, React, and Next.js. These creations blend creativity with technology, utilizing frameworks like React Bootstrap and Tailwind CSS for captivating designs."</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
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
                            projectsTab1.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {
                            projectsTab2.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {
                            projectsTab3.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
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
  )
}