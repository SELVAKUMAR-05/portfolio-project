import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">SELVA KUMAR S </span>
            from <span className="purple"> Chennai, India.</span>
            <br>


            </br>
            <br />
            A passionate B.Tech Information Technology student at RMK Engineering College. I have a strong interest in innovative technology, IoT, and AI-driven solutions. I enjoy working on both hardware and software projects, integrating sensor-based and AI-based approaches to solve real-world problems. My goal is to create impactful solutions that enhance safety, efficiency, and convenience.
            
            
            <br />
            <br>
              
            </br>
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">SELVA KUMAR S</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
