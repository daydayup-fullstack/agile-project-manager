import React, { useState } from "react";
import "./Drawer.css";
import AddButtonCircular from "../AddButtonCircular/AddButtonCircular";
import Profile from "../Profile/Profile";
import { users } from "../../model/model";
import Tooltip from "../Tooltip/Tooltip";

const Drawer = ({ children }) => {
  const [shouldClose, setShouldClose] = useState(false);
  const [shouldShowTooltip, setShouldShowTooltip] = useState(false);

  let openDrawer = () => setShouldClose(false);
  let closeDrawer = () => setShouldClose(true);

  return (
    <div className="Drawer">
      <section className={"left"}>
        <header className={"SideMenuHeader"}>
          <div>Logo</div>
          <span className="material-icons" onClick={closeDrawer}>
            menu_open
          </span>
        </header>
      </section>

      <section className={`right ${shouldClose ? "close" : "open"}`}>
        <header className={"content-header"}>
          <div className="title">
            {shouldClose && (
              <span className={"material-icons icon"} onClick={openDrawer}>
                menu
              </span>
            )}
            <h2>Home</h2>
          </div>
          <div className={"more-content"}>
            <ul>
              <li>
                <AddButtonCircular onHandleClick={() => setShouldShowTooltip(!shouldShowTooltip)}/>
              </li>

              <li>
                {/*todo - hardcoded data - fix this later*/}
                <Profile user={users["user-c8dc5864"]}/>
              </li>
            </ul>
          </div>
        </header>

        <Tooltip shouldShow={shouldShowTooltip} />
        <div className="content">{children}</div>
      </section>
    </div>
  );
};

export default Drawer;
