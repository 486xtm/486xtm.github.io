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
                <li id="rxjs">DEFI</li>
                <li id="rxjs">Dapp Development</li>
                <li id="rxjs">Solidity</li>
                <li id="rxjs">SmartContract</li>
                <li id="rxjs">NFT</li>
                <li id="rxjs">ICOs</li>
                <li id="rxjs">Solana</li>
                <li id="react" >React.js</li>
                <li id="angular">Angular.js</li>
                <li id="vue">Vue.js</li>
                <li id="rxjs">React Native</li>
                <li id="redux">Redux</li>
                <li id="node">Node.js</li>
                <li id="ngrx">Next.js</li>
                <li id="javascript">JavaScript</li>
            </ul>
        </div>
    );
};

export default Skills;
