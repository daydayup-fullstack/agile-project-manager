import React, { useState } from "react";
import "./Drawer.css";
import ContentHeader from "../ContentHeader/ContentHeader";
import SideMenuSection, { Favorites, Team, } from "../SideMenuSection/SideMenuSection"
import { db_users, db_projects, team } from '../../data/database';


const Drawer = ({ nav, children }) => {
  const [shouldClose, setShouldClose] = useState(false);

  let openDrawer = () => setShouldClose(false);
  let closeDrawer = () => setShouldClose(true);

  return (
    <div className="Drawer">
      <section className={`SideMenu ${shouldClose ? "SideMenu--close" : "SideMenu--open"}`}>
        <header className={"SideMenu--header"}>
          <div>Logo</div>
          <span className="material-icons" onClick={closeDrawer}>
            menu_open
          </span>
        </header>
        <div className="SideMenu--content">
          {nav}
          <div className="below">
            <SideMenuSection>
              <Favorites projects={db_projects} />
            </SideMenuSection>
            <SideMenuSection>
              <Team projects={db_projects} team={team} />
            </SideMenuSection>
          </div>
        </div>
      </section>

      <section className={`main`}>
        <div className="main--content">
          <ContentHeader shouldClose={shouldClose} openDrawer={openDrawer} />
          {children}
        </div>
      </section>
    </div>
  );
};

export default Drawer;
