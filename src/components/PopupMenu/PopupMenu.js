import React, { useRef } from "react";
import "./PopupMenu.css";
import { connect } from "react-redux";
import {
  clear_projectCard_hold,
  hide_column_popup,
  hide_header_addButton_popup,
  hide_header_filter_popup,
  hide_header_profile_popup,
  hide_header_projectIcon_popup,
  hide_header_projectInfo_popup,
  hide_projectCard_popup,
  hide_taskcard_context_menu,
  show_taskcard_context_menu,
  hide_task_assignee_scrollable_popup,
  hide_calendar_popup
} from "../../actions";

const PopupMenu = ({
  children,
  anchor = { x: 0, y: 0, width: 0, height: 0 },
  hide_projectCard_popup,
  hide_header_projectIcon_popup,
  hide_header_profile_popup,
  hide_header_projectInfo_popup,
  header_projectIcon_popup,
  hide_header_addButton_popup,
  hide_header_filter_popup,
  hide_taskcard_context_menu,
  hide_column_popup,
  hide_task_assignee_scrollable_popup,
  hide_calendar_popup,
  onDismiss,
}) => {
  const [origin, setOrigin] = React.useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });
  const popup = useRef(null);

  const OFFSET_Y = 20;
  const OFFSET_X = 4;

  React.useEffect(() => {
    if (anchor.x + popup.current.clientWidth > window.innerWidth) {
      const x = anchor.x + anchor.width - popup.current.clientWidth;
      const y = anchor.y;
      setOrigin({
        x: x - OFFSET_X,
        y: y,
      });
    } else {
      setOrigin({ x: anchor.x + OFFSET_X, y: anchor.y });
    }
  }, [anchor.x, anchor.y, anchor.width]);

  const dismiss = () => {
    if (onDismiss) onDismiss();
    hide_projectCard_popup();
    hide_header_projectIcon_popup();
    hide_header_profile_popup();
    hide_header_projectInfo_popup();
    hide_header_addButton_popup();
    hide_header_filter_popup();
    hide_taskcard_context_menu();
    hide_column_popup();
    hide_task_assignee_scrollable_popup();
    hide_calendar_popup();
  };

  const styleFix = header_projectIcon_popup.shouldShow
    ? {
        border: "none",
        background: "unset",
      }
    : {};

  return (
    <div
      className="PopupMenu"
      onClick={dismiss}
      onContextMenu={(e) => {
        e.preventDefault();
        dismiss();
      }}
    >
      <div
        className="menu"
        style={{
          top: `${origin.y + OFFSET_Y}px`,
          left: `${origin.x}px`,
          ...styleFix,
        }}
        ref={popup}
      >
        {children}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    header_projectIcon_popup: {
      shouldShow: state.app.ui_header_project_icon_popup.shouldShow,
    },
  };
};

export default connect(mapStateToProps, {
  hide_projectCard_popup,
  clear_projectCard_hold,
  hide_header_projectIcon_popup,
  hide_header_profile_popup,
  hide_header_projectInfo_popup,
  hide_header_addButton_popup,
  hide_header_filter_popup,
  hide_taskcard_context_menu,
  show_taskcard_context_menu,
  hide_column_popup,
  hide_task_assignee_scrollable_popup,
  hide_calendar_popup
})(PopupMenu);
