import React from "react";
import "./team.css";
import Panel from "../../components/TeampageProjectPanel/Panel";
import DescriptionPanel from "../../components/TeamDescriptionPanel/DescriptionPanel";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import AddProjectCard from "../../components/AddProjectCard/AddProjectCard";
import Members from '../../components/TeamMember/TeamMember';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import TeamFilterbar from "../../components/TeamFilter/TeamFilterbar";
// import '../../components/TeamMember/TeamMember.css';
// import '../../components/TeamDescriptionPanel/Panel.css';
// import TeamMemberPopup from '../../components/TeamMemberPopup/TeamMemberPopup';
// import AddTeamMember from '../../components/AddTeamMember/AddTeamMember';


const Team = ({ projectsInOrder, projects }) => {
    const style = {
        textDecoration: "none",
        color: "#151b26",     
      };
    

    return (
         <div className="App-Team">
            <TeamFilterbar />
            <div className='panels'>
                <span className='panel_left'>
                    <div>
                    <DescriptionPanel panelName={"Description"}></DescriptionPanel> 
                    <Members />
                    </div>
                </span>  
                <span>
                    <Panel panelName={"Projects"}>
                        <span><AddProjectCard /></span>
                        <span className='projects'>
                        {projectsInOrder.map((id) => (
                        <Link to={`/project/${id}`} key={id} style={style}>
                            <ProjectCard project={projects[id]} />
                        </Link>
                        ))}
                        </span>            
                    </Panel>
                </span> 
            </div >      
        </div>      
    )
}


const mapStateToProps = (state) => {
  return {
    projectsInOrder: state.workspace.projectsInOrder,
    projects: state.workspace.projects,
  };
};

export default connect(mapStateToProps, {})(Team);
