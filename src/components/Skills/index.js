import React, { useContext } from 'react';
import './index.scss';
import { ThemeContext } from "../../context/ThemeContext";

const Skills = () => {
    const { changeTheme, startThemeChangeTimer, stopThemeChangeTimer } = useContext(ThemeContext);

    function handleMouseEnter(e) {
        const type = e.nativeEvent.target.id;
        if (type) {
            changeTheme(type)
        }
    }

    return (
        <div className="skills">
            <h6>Skills</h6>
            <ul onMouseEnter={stopThemeChangeTimer}
                onMouseLeave={startThemeChangeTimer}
                onMouseOver={handleMouseEnter} >
                <li id="react" >React.js</li>
                <li id="angular">Angular.js</li>
                <li id="vue">Vue.js</li>
                <li id="rxjs">React Native</li>
                <li id="redux">Redux</li>
                <li id="node">Node.js</li>
                <li id="ngrx">Next.js</li>
                <li id="javascript">JavaScript</li>
                <li id="rxjs">Laravel</li>
                <li id="rxjs">HTML</li>
                <li id="rxjs">CSS/Sass/Less</li>
                <li id="rxjs">Bootstrap/Tailwind CSS</li>
                <li id="rxjs">Three.js/Web3.js</li>
            </ul>
        </div>
    );
};

export default Skills;
