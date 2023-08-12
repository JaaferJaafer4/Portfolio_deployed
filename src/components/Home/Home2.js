import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="blue"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            I'm a creative and adaptable techie with a strong desire to create effective digital solutions.      
            <br />
              <br />
            My research of the technological world was spurred by curiosity at first, but it has since developed into a strong foundation of knowledge and abilities.
            <br />
              <br />
             My main area of interest is 
             <i>
                <b className="blue"> full-stack development </b>
              </i>, where I can use my innovative problem-solving skills
              and in-depth knowledge of many technologies. Proficiency in
              <i>
                <b className="blue"> Java, Typescript, C#, C, Python, Kotlin, JavaScript and PHP </b>
              </i> 
               with related frameworks like
               <i>
                <b className="blue">  React, Angular, Spring, .Net core, Symfony </b>
              </i> 
               I'm dedicated to providing effective and unique solutions that straddle the concept and implementation divide.
               <br />
              <br />
                Join me on a tour of my portfolio, where I highlight the tasks and encounters that demonstrate my technical expertise and commitment to lifelong learning.
  
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="blue">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/JaaferJaafer4"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
             
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/jaafar-jaafar-47a312233/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
             
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
