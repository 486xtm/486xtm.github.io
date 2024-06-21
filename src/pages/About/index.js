import React from "react";
import "./index.scss";
import Title from "../common/Title";

const About = () => {
  return (
    <div className="page" id="about">
      <Title>About Me</Title>
      <div className="row">
        <div className="column">
          <strong>Hi, I am Rudy</strong>
          <p>
            I am a highly skilled and innovative Web3 Full Stack Developer with
            over 4 years of experience in building decentralized applications
            (dApps) and blockchain solutions. 
            <br /> <br />
            I excel in leveraging cutting-edge web technologies and blockchain protocols to create seamless
            and secure user experiences. 
            My expertise spans both front-end and back-end development, with a deep understanding of smart contracts,
            distributed ledgers, and decentralized finance (DeFi). 
            <br /> <br />
            I am committed to staying at the forefront of emerging technologies,
            continuously learning, and contributing to the evolution of the Web3
            ecosystem.
          </p>
        </div>
      </div>
      <Title>Interests & Hobbies</Title>
      <div className="row">
          <ul>
            <li>SPassionate about Family</li>
            <li>Horse-riding & spending time in nature </li>
            <li>Developing our team into star analysts</li>
          </ul>
      </div>
      <Title>Language</Title>
      <div className="row">
          <ul>
            <li>Germany - Native Speaker</li>
            <li>English - Fluent</li>
          </ul>
      </div>
    </div>
  );
};

export default About;
