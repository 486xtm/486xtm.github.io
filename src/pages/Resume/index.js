import React from "react";
import moment from "moment";
import Title from "../common/Title";
import "./index.scss";
import ResumeItem from "./Item";


const Resume = () => {
  return (
    <div className="page" id="resume">
      <Title icon={"fa fa-briefcase"}>
        {/* {moment().diff('09/01/2018', 'years', true).toFixed(2)} */}
        Resume - Total Commercial Experience 7 years
      </Title>
      <ResumeItem
        date={"2023.1 - 2024.5"}
        title={"Senior Blockchain Engineer"}
        company={"Fracas Web3 Agency, US | Remote "}
        // logo={whiz}
      >
      <h4 className="text-center">Description</h4>
        • Developed decentralized applications (dApps) on the Solana blockchain.<br />
        • Architected scalable and secure blockchain solutions.<br />
        • Led a team of developers and conducted code reviews.  <br />
        • Integrated smart contracts and front-end interfaces. <br />
        • Implemented SEO strategies to improve search engine rankings. <br />
       
      </ResumeItem>
      <ResumeItem
        date={"2020.6 - 2022.12"}
        title={"Senior Blockchain & Full Stack Developer"}
        company={"KPMG, US | Remote"}
        // logo={digiturk}
      >
         <h4 className="text-center">Description</h4>
        • Completed big projects on time and got good feedback from clients.   Implemented fullstack applications using Web3 technologies.<br/>
        • Built the MEVN, MEAN stack making sure it worked well and was safe.<br/>
        • Used Next.js to make websites load faster and be easier to find on search engines like Google.<br/>
        • Made it quicker and easier to release new updates to our software.<br/>
        • Added blockchain technology to our software, making it more secure and letting us do more things with it.<br/>
        • Got awards for doing great work and shared what I know with others in the team.<br/>
        • Developed basic smart contracts using Solidity for Ethereum blockchain applications, under the guidance of senior developers.<br/>

      </ResumeItem>

      <ResumeItem
        date={"2019.4 - 2020.5"}
        title={"Senior Frontend  Developer"}
        company={"TRUSCOVA GMBH, Germany"}
        // logo={digiturk}
      >
         <h4 className="text-center">Description</h4>
        • Developed software applications using the React.js , Next.js and Vue.js, making sure it worked well and was safe.<br/>
        • Worked with teams to understand project requirements and design features.<br/>
        • Built responsive and dynamic user interfaces.<br/>
        • Participated in code reviews and received feedback from senior developers. <br/>
        • Improved coding skills and followed best practices in software development.<br/>

      </ResumeItem>
      <ResumeItem
        date={"2018.2 - 2019.3"}
        title={"React Developer"}
        company={"MAINMATTER, Germany"}
        // logo={digiturk}
      >
         <h4 className="text-center">Description</h4>
        • Helped make software using MERN (MongoDB, Express, React, Node.js) stack, learning how to build all parts of a program.<br/>
        • Worked with the team to understand what the software needed to do and then helped make it.<br/>
        • Learned how to use MongoDB for storing data, Express for making the software run, and React for making it look good.<br/>
        • Was part of the team and learned how to work together to finish tasks on time.<br/>
        • Got feedback from others on my work and learned how to make it better.<br/>


      </ResumeItem>
      <Title icon={"fa fa-university"}>Education</Title>
      <ResumeItem
        date={"Aug 2018"}
        title={"University of Bremen"}
        company={"Germany"}
        // logo={firat}
      >
        Bachelor of Computer Science
      </ResumeItem>
    </div>
  );
};

export default Resume;
