import React from "react";
import "./index.scss";
import Title from "../common/Title";

const About = () => {
  return (
    <div className="page" id="about">
      <Title>About Me</Title>
      <div className="row">
        <div className="column">
          <strong>Hi, I am Rudy Lam</strong>
          <p>
            Creative Frontend Developer and Talented Software Engineer with 7+
            years of experience in designing and developing successful user
            interfaces.
            <br /> <br />
            Proficient in Frontend development with various technologies and
            skilled at learning and implementing new technologies.
            <br />
            <br />I am a committed coder with excellent communication skills and
            a wealth of knowledge and experience, making me a valuable
            colleague.
          </p>
        </div>
      </div>
      <Title>Highlights of Qualifications</Title>
      <div className="row">
        <div className="column">
          <ul>
            <li>Sound knowledge of MVC frameworks</li>
            <li>Deep understanding of JavaScriptOOP & FP</li>
            <li>Hungry and eager to learn</li>
            <li>Ability to learn rapidly</li>
            <li>Follow emerge technologies</li>
            <li>
              Excellent coding and code review experience. Clear
              structure,standardized naming, strong logic, low code redundancy
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
