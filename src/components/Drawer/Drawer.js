import React, { useState } from "react";
import "./Drawer.css";
import ContentHeader from "../ContentHeader/ContentHeader";

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
        </div>
      </section>

      <section className={`main`}>
        <div className="main--content">
            <ContentHeader shouldClose={shouldClose} openDrawer={openDrawer}/>
            {children}
        </div>
      </section>
    </div>
  );
};

export default Drawer;
