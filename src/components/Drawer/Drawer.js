import React from "react";
import "./Drawer.css";
import { close_app_drawer } from "../../actions";
import { connect } from "react-redux";

const Drawer = ({ nav, children, shouldOpen, close_app_drawer }) => {
  return (
    <div className="Drawer">
      <section
        className={`SideMenu ${
          shouldOpen ? "SideMenu--open" : "SideMenu--close"
        }`}
      >
        <header className={"SideMenu--header"}>
          <div>Logo</div>
          <span
            className="material-icons"
            onClick={() => {
              close_app_drawer();
            }}
          >
            menu_open
          </span>
        </header>
        <div className="SideMenu--content">{nav}</div>
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
  };
};

export default connect(mapStateToProps, { close_app_drawer })(Drawer);
