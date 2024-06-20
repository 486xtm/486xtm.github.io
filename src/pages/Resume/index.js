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
        date={"July 2022  - June 2024"}
        title={"Senior Frontend Developer"}
        company={"Fracas Web3 Agency, US "}
        // logo={whiz}
      >
      <h4 className="text-center">Description</h4>
        • Built frontend features using React for a new feature, improving
        customer adoption by 25%.
        <br />
        • Revamped the user interface using Tailwind CSS and integrated advanced cryptocurrency functionalities through Web3.js, enhancing user engagement by 40%. <br />
        • Enhanced components to reusable functional components so facilitated user onboarding on a financial website. <br />
        • Achieved a rapid stepper flow to facilitate the onboarding of new members onto a platform enabling them to easily obtain loans of their desired amounts with Angular. <br />
        • Implemented integrations with 3rd-party web service APIs, including payment gateways, ACH services, suppliers, etc. <br />
        • Developed multiple services and significantly reduced the downtime of application from five seconds to one second, by implementing REDIS and custom WebSocket library. <br />
       
      </ResumeItem>
      <ResumeItem
        date={"October 2019 - May 2022"}
        title={"Junior Frontend Developer"}
        company={"Skyline, UK "}
        // logo={digiturk}
      >
         <h4 className="text-center">Description</h4>
        • Used Next.js and Reacts new feature - Hooks to rewrite and refactor frontend applications and reduced codebase by 30% codes (better maintenance).{" "}
        <br />
        • Implemented GraphQL and web scraping technologies to enhance efficiency by 30% for e-commerce and statistic websites. <br />
        • Utilized Webpack for module bundling and Cypress for end-to-end testing. <br />
        • Ported web applications to mobile view, designed UI with Vue.js and Kendo UI. <br />
        • Completed Social app with Angular within Agile
methodology.
 <br />
        • Implemented MEVN project and created custom Vue directives for DOM manipulation and validation. <br />
        • Built numerous common control elements with flexible parameters and designs, including Tree, Slide-View, and Table Grid, using Tailwind CSS. <br />
        • Optimized site loading speed and SEO. <br />
        • Worked with Jest and CI/CD methodology to write unit tests for the code. <br />
      </ResumeItem>

      <ResumeItem
        date={"April 2018 - September 2019"}
        title={"Software Developer"}
        company={"Skyline, UK "}
        // logo={digiturk}
      >
         <h4 className="text-center">Description</h4>
        • Developed tens of pixel-perfect HTML pages using pure CSS and JavaScript, ensuring responsiveness and supporting easy application of seven themes.{" "}
        <br />
        • Used Ajax and JQuery selectors in accessing various parts of the DOM. <br />
        • Used jQuery, HTML5, CSS3, and Google Maps API and collaborated with REST. <br />
        • Crafted web applications with React.js, Redux, Node.js, Express.js and MongoDB. <br />
        • Played a significant role in PHP 7 development, Laravel framework, My SQL work.<br />
        • Used React to develop a check-in system for a local sports facility, saving them over $4,000 per year in subscription fees. <br />
        • Delivered responsive and cross-browser compatible compliant websites, achieving 19% faster load time than industry average. Used WebSocket for real-time communication between backend and frontend. <br />
        • Tested APIs with Postman, managed version control with GIT. <br />
      </ResumeItem>
      
      <Title icon={"fa fa-university"}>Education</Title>
      <ResumeItem
        date={"August 2017"}
        title={"University of Bremen"}
        company={"Germany"}
        // logo={firat}
      >
        Bachelor of Science in Information Technology
      </ResumeItem>
    </div>
  );
};

export default Resume;
