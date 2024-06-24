import React, { useContext } from 'react';
import './index.scss'
import TypedText from "../TypedText";
import SocialLinks from "../SocialLinks";
import Info from "../Info";
import Skills from "../Skills";
import {ThemeContext} from "../../context/ThemeContext";
import {useAnimation} from "../../use/animation";
import Resume_pdf from './Resume.pdf';
const Profile = () => {
    const { backgroundImage, type } = useContext(ThemeContext);
    const { animation } = useAnimation();
    return (
        <div className="profile">
            <div className="profile__banner">
                <div className={`profile__photo ${animation}`} style={{backgroundImage: `url(${backgroundImage})`}} />
                {/* <img
                    src={me}
                    alt={type}
                /> */}
            </div>
            <div className="profile__content">
                <div className="profile__title">
                    Rudy Tan
                </div>
                <TypedText
                  dataText={
                      [
                          'Senior Blockchain Engineer',
                          'BlockChain Development',
                          'FullStack Development',
                      ]
                  }
                />
                <SocialLinks/>
                <Info icon="location">
                    Bremen, Germany
                </Info>
                <Skills />
            </div>
            <div className="profile__contact">
                <a href={Resume_pdf} target="_blank" rel="noreferrer">
                        <span>
                            Download CV
                        </span>
                </a>
                <a href="mailto:floria428@gmail.com">
                        <span>
                            Contact Me
                        </span>
                </a>
            </div>
        </div>
    );
};

export default Profile;
