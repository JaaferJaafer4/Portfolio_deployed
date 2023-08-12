import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import hospital from "../../Assets/Projects/Hospital.jpg";
import restaurant from "../../Assets/Projects/restaurant.jpg";

import university from "../../Assets/Projects/University.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={restaurant}
              isBlog={false}
              title="Restaurant website"
              description="Presenting a dynamic restaurant website that appeals to both the users digital and gustatory senses. This lively web platform skillfully combines mouthwatering culinary specialties with an aesthetically pleasing design, inviting users to discover a world of flavors. Users can browse the menu, make reservations, and take advantage of a virtual environment that replicates the welcoming feel of the restaurant through simple navigation."
              ghLink="https://github.com/GhaithBrzig/WebProject"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={university}
              isBlog={false}
              title="University bayout management website"
              description="Introducing a university student buyout management website that streamlines the process with efficiency and ease. This online platform offers students a seamless experience to explore, compare, and manage various buyout options. From user-friendly navigation to secure transaction handling, the website empowers students to make informed decisions tailored to their needs."
              ghLink="https://github.com/Hadj-Said-Ahmed/Esprit"
      
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hospital}
              isBlog={false}
              title="Hospital management website"
              description="Introducing a digital hospital website that transforms communication and access to healthcare. In a virtual healthcare environment, this state-of-the-art online platform effortlessly connects patients, physicians, and administrators. The website provides user-friendly capabilities that improve patient care, such as arranging appointments and gaining access to medical records."
              ghLink="https://github.com/MoetazHajji/Biochar-Frontend"             
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
