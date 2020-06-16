import React from "react";
import "./Drawer.css";
import { close_app_drawer } from "../../actions";
import { connect } from "react-redux";
import SideMenuSection, {
  Favorites,
  Team,
} from "../SideMenuSection/SideMenuSection";
// import { team } from "../../data/database";

const Drawer = ({
  nav,
  children,
  shouldOpen,
  close_app_drawer,
  starredProjects,
  currentWorkspace,
  allProjects,
}) => {
  const favorites = allProjects.filter(
    (project) => starredProjects.indexOf(project.id) >= 0
  );

  return (
    <div className="Drawer">
      <section
        className={`SideMenu ${
          shouldOpen ? "SideMenu--open" : "SideMenu--close"
        }`}
      >
        <header className={"SideMenu--header"}>
          <h1>Agilo</h1>
          <span
            className="material-icons"
            onClick={() => {
              close_app_drawer();
            }}
          >
            menu_open
          </span>
        </header>
        <div className="SideMenu--content">
          {nav}
          <div className="below">
            <SideMenuSection>
              <Favorites projects={favorites} />
            </SideMenuSection>
            <SideMenuSection>
              {/* <Team
                projects={allProjects}
                team={team}
                workspace={currentWorkspace}
              /> */}
            </SideMenuSection>
          </div>
        </div>
      </section>

      <section className={`main`}>
        <div className="main--content">{children}</div>
      </section>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    shouldOpen: state.app.ui_drawer.shouldOpen,
    starredProjects: state.user.starredProjects,
    currentWorkspace: state.workspace,
    allProjects: state.allProjects,
  };
};

export default connect(mapStateToProps, { close_app_drawer })(Drawer);
