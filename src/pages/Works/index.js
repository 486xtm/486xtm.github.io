import React, { useState } from 'react';
import { projects } from './data';
import Title from "../common/Title";
import WorkItem from "./Item";
import WorksMenu from "./Menu";

// const initalState = projects.filter(p => p.type === 'react');

const Works = () => {
    const [selectedProjects, setSelectedProjects] = useState(projects);
    const [selectedType, setSelectedType] = useState('All');

    function handleMenuChange(type) {
        if(type == "All")
            setSelectedProjects(projects);
        else
        {

            console.log(type);
            setSelectedProjects(projects.filter(p => p.type === type));
        }
        setSelectedType(type);
    }


    return (
        <div className="page" id="works">
            <Title>
                My Work History
            </Title>
            <WorksMenu
                items={[
                    'All',
                    'Blockchain',
                    'React',
                    'Next',
                    'Vue'
                ]}
                selected={selectedType}
                clicked={handleMenuChange}
            />
            <div >
                {
                    selectedProjects.map(
                        (item,index) => <div className="column" key={index}>
                            <WorkItem
                                {...item}
                            />
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Works;
