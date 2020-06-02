import React, { useState } from 'react';
import './Panel.css';

const Panel = ({ panelName, children, projectsData}) => {

    const [shouldCollapse, setShouldCollapse] = useState(false);

    const handleTogglePanel = () => shouldCollapse ? setShouldCollapse(false) : setShouldCollapse(true)
    const iconName = shouldCollapse ? "arrow_right" : "arrow_drop_down"
    return (
        <div className="panel">
            <div className="panel__top">
                <div className="material-icons panel__icon" onClick={handleTogglePanel}>
                    {iconName}
                </div>
                <h2 className="panel__name">
                    {panelName}
                </h2>
                
                <span class="material-icons change_view">apps</span>
            
            </div>
            <div className="panel__divider"/>
            <div className={`panel__bottom ${shouldCollapse ? "collapse" : "expand"}`}>
                {children}
            </div>
        </div>
    )
}

export default Panel;