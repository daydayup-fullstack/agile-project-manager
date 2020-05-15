import React, { useState } from 'react';
import './Panel.css';
import ProjectCard from "../ProjectCard/ProjectCard";

const Panel = ({ panelName }) => {

    const [shouldCollapse, setShouldCollapse] = useState(false);

    const handleTogglePanel = () => shouldCollapse ? setShouldCollapse(false) : setShouldCollapse(true)
    const iconName = shouldCollapse ? "arrow_right" : "arrow_drop_down"

    const action = (message) => {
        console.log(message);
    }

    return (
        <div className="panel">
            <div className="panel__top">
                <div className="material-icons panel__icon" onClick={handleTogglePanel}>
                    {iconName}
                </div>
                <h2 className="panel__name">
                    {panelName}
                </h2>
            </div>
            <div className="panel__divider"/>
            <div className={`panel__bottom ${shouldCollapse ? "collapse" : "expand"}`}>
                <ProjectCard
                    project={{ name: 'mockProject', colorIndex: 3 }}
                    onHandleClick={action('this is a mock project')} />
                <ProjectCard
                    project={{ name: 'mockProject', colorIndex: 3 }}
                    onHandleClick={action('this is a mock project')} />
                <ProjectCard
                    project={{ name: 'mockProject', colorIndex: 3 }}
                    onHandleClick={action('this is a mock project')} />
                <ProjectCard
                    project={{ name: 'mockProject', colorIndex: 3 }}
                    onHandleClick={action('this is a mock project')} />
                <ProjectCard
                    project={{ name: 'mockProject', colorIndex: 3 }}
                    onHandleClick={action('this is a mock project')} />
                <ProjectCard
                    project={{ name: 'mockProject', colorIndex: 3 }}
                    onHandleClick={action('this is a mock project')} />
                <ProjectCard
                    project={{ name: 'mockProject', colorIndex: 3 }}
                    onHandleClick={action('this is a mock project')} />
                <ProjectCard
                    project={{ name: 'mockProject', colorIndex: 3 }}
                    onHandleClick={action('this is a mock project')} />
            </div>
        </div>
    )
}

export default Panel;