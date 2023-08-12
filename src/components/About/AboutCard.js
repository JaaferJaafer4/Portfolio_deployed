import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Jaafar jaafar </span>
            from <span className="purple"> Bizerte, Tunisia.</span>
            <br /> I am a final year student pursuing a software engineering degree in computer science.
       
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Chess
            </li>
            <li className="about-activity">
              <ImPointRight /> Cycling
            </li>
            <li className="about-activity">
              <ImPointRight /> Lifting weights
            </li>
          </ul>

     
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
