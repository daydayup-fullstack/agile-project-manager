import React, {Component} from "react";
import "./ProjectDetail.css";
import {Link, withRouter} from "react-router-dom";
import {project_added, project_selected} from "../../actions";
import {connect} from "react-redux";
import {generateId} from "../../model/utility";
import {saveNewProjectToServer,updateUserToServer} from "../../apis/api";
import { user } from "../../reducers";

class ProjectDetail extends Component {
  constructor() {
    super();
    this.state = {
      projectName: "",
      defaultView: "list",
      privacy: "private",
      description: null,
    };

    this.handleProjectNameChange = this.handleProjectNameChange.bind(this);
    this.handleRadioChange = this.handleRadioChange.bind(this);
    this.handleAddDescription = this.handleAddDescription.bind(this);
    this.handleChangeDescription = this.handleChangeDescription.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleProjectNameChange(e) {
    this.setState({
      projectName: e.target.value,
    });
  }

  handleRadioChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleAddDescription() {
    this.setState({
      description: " ",
    });
  }

  handleChangeDescription(e) {
    this.setState({
      description: e.target.value,
    });
  }

  handleSubmit() {
    const projectId = generateId();
    const newProject = {
      id: projectId,
      colorIndex: Math.floor(Math.random() * 16),
      columnOrder: [],
      iconIndex: Math.floor(Math.random() * 28),
      name: this.state.projectName,
    };
    this.props.project_added(newProject);
    this.props.project_selected(newProject);
    this.props.history.push(`/projects/${newProject.id}`);
    saveNewProjectToServer(newProject, this.props.workspace);
    if(this.state.privacy==='private'){
      const newUser={
        ...this.props.user,
        privateProjects:[...this.props.user.privateProjects, newProject],
      }
      updateUserToServer(newUser)
    }
  }

  render() {
    const {projectName, description} = this.state;

    return (
        <section className="projectDetail">
          <div className="projectDetail__nav">
            <Link to="/home">
              <div className="material-icons icon">arrow_back</div>
            </Link>
            <Link to="/home">
              <div className="material-icons icon">close</div>
            </Link>
          </div>

          <form
              className="projectDetail__form"
              onSubmit={(e) => {
                e.preventDefault();
                this.handleSubmit();
              }}
          >
            <div className="projectDetail__title">
              <h2>Add Project Details</h2>
            </div>
            <div className="projectDetail__name">
              <label htmlFor="projectName" className="projectDetail__label">
                Project name
              </label>
              <br/>
              <input
                  className={projectName ? "" : "projectDetail__name-disabled"}
                  type="text"
                  name="projectName"
                  value={projectName}
                  onChange={this.handleProjectNameChange}
              />
              <br/>
              {description ? (
                  <textarea
                      className="projectDetail__description"
                      placeholder="please input the description"
                      onChange={this.handleChangeDescription}
                      value={description}
                  />
              ) : (
                  <button type="button" onClick={this.handleAddDescription}>
                    Add a description
                  </button>
              )}
            </div>
            <div className="projectDetail__defaultView">
              <label htmlFor="defaultView" className="projectDetail__label">
                Default view
              </label>
              <div className="projectDetail__radios">
                <input
                    type="radio"
                    name="defaultView"
                    value="list"
                    checked={this.state.defaultView === "list"}
                    onChange={this.handleRadioChange}
                />
                <span className="material-icons icon">list_alt</span>
                <span>List</span>
              </div>
              <div className="projectDetail__radios">
                <input
                    type="radio"
                    name="defaultView"
                    value="board"
                    checked={this.state.defaultView === "board"}
                    onChange={this.handleRadioChange}
                />
                <span className="material-icons icon">dashboard</span>
                <span>Board</span>
              </div>
            </div>
            <div className="projectDetail__privacy">
              <label htmlFor="privacy" className="projectDetail__label">
                Privacy
              </label>
              <div className="projectDetail__radios">
                <input
                    type="radio"
                    name="privacy"
                    value="public"
                    checked={this.state.privacy === "public"}
                    onChange={this.handleRadioChange}
                />
                <span className="material-icons icon">people_outline</span>
                <span>public</span>
              </div>
              <div className="projectDetail__radios">
                <input
                    type="radio"
                    name="privacy"
                    value="private"
                    checked={this.state.privacy === "private"}
                    onChange={this.handleRadioChange}
                />
                <span className="material-icons icon">perm_identity</span>
                <span>private</span>
              </div>
            </div>
            <button
                type="submit"
                className={
                  projectName
                      ? "projectDetail__createProject"
                      : "projectDetail__createProject projectDetail__createProject-disabled"
                }
            >
              Create project
            </button>
          </form>
        </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    workspace: state.workspace,
    user:state.user
  };
};

export default connect(mapStateToProps, {project_added, project_selected})(
    withRouter(ProjectDetail)
);
