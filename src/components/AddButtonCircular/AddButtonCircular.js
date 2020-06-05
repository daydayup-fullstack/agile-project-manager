import React from "react";

import "./AddButtonCircular.css";
import { connect } from "react-redux";
import { show_header_addButton_popup } from "../../actions";
import { calcAddButtonAnchor } from "../../model/utility";

const AddButtonCircular = ({ show_header_addButton_popup }) => {
  return (
    <div
      className={"AddButtonCircular"}
      onClick={(e) => show_header_addButton_popup(calcAddButtonAnchor(e))}
    >
      <span className={"material-icons"}>add</span>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {};
};
export default connect(mapStateToProps, { show_header_addButton_popup })(
  AddButtonCircular
);
