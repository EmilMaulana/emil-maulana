import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Emil Maulana </span>
            from <span className="purple"> Ciamis, Jawa Barat.</span>
            <br />Fifth-semester student at Singaperbangsa University Karawang who has an interest in the fields of Web Programming, Social
                  Media Design, Content Creation and Business. I have 3 years of knowledge and experience in building scalable and highperformance web applications. Proficient in implementing MVC architecture. 
            <br />
            <br/> 
            Have experience in building academic system applications with subject registration, grade management and scheduling features.
            Familiar with working in an Agile team and using Git for version control. Mastering HTML, CSS, JavaScript, and Bootstrap for interactive front-end development.
            Additionally, I have experience in developing and managing visual content for Instagram and TikTok accounts. 
            <br/> 
            <br/> 
            I have succeeded in increasing Instagram follower engagement by 30% in 3 months through creating creative and informative
            informatics engineering educational content. The content I create includes programming tutorials, explanations of algorithm
            concepts, and career tips in the IT field. Apart from that, I am capable of running an online business selling fashion products.
            Able to manage time effectively to balance coursework, product development, and marketing. Have optimal physical abilities
            and always be neat, deft and organized at work
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Social Media Design
            </li>
            <li className="about-activity">
              <ImPointRight /> Create video tutorials
            </li>
            <li className="about-activity">
              <ImPointRight /> Writting Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Love pain to be the best"{" "}
          </p>
          <footer className="blockquote-footer">Emil Maulana</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
