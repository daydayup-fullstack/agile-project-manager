import { db_columns, db_tasks } from "../data/database";

// ============== Project ========================

export const PROJECT_SELECTED = "PROJECT_SELECTED";
export const project_selected = (project) => {
  return {
    type: PROJECT_SELECTED,
    payload: {
      project,
      // todo - change to dynamic data source
      columns: { ...db_columns },
      tasks: { ...db_tasks },
    },
  };
};

export const PROJECT_CHANGED = "PROJECT_CHANGED";
export const project_changed = (project) => {
  return {
    type: PROJECT_CHANGED,
    project,
  };
};

export const CHANGE_NEW_TASK_DISPLAY = "CHANGE_NEW_TASK_DISPLAY";
export const changeNewTaskDisplay = (newTaskDisplay) => {
  return {
    type: CHANGE_NEW_TASK_DISPLAY,
    newTaskDisplay,
  };
};

export const PROJECT_DELETED = "PROJECT_DELETED";
export const delete_project = (project) => {
  return {
    type: PROJECT_DELETED,
    project,
  };
};

export const PROJECT_STAR_ADDED = " PROJECT_STAR_ADDED";
export const add_project_star = (project) => {
  return {
    type: PROJECT_STAR_ADDED,
    project,
  };
};

export const PROJECT_STAR_REMOVED = " PROJECT_STAR_REMOVED";
export const remove_project_star = (project) => {
  return {
    type: PROJECT_STAR_REMOVED,
    project,
  };
};

export const PROJECT_ICON_SELECTED = "PROJECT_ICON_SELECTED ";
export const select_project_icon = (project) => {
  return {
    type: PROJECT_ICON_SELECTED,
    project,
  };
};

export const PROJECT_COLOR_SELECTED = "PROJECT_COLOR_SELECTED ";
export const select_project_color = (project) => {
  return {
    type: PROJECT_COLOR_SELECTED,
    project,
  };
};

// ================ ui state ======================

export const SHOW_PROJECT_CARD_POPUP = "SHOW_PROJECT_CARD_POPUP";
export const show_projectCard_popup = ({ anchor }) => {
  return {
    type: SHOW_PROJECT_CARD_POPUP,
    anchor,
  };
};

export const HIDE_PROJECT_CARD_POPUP = "HIDE_PROJECT_CARD_POPUP";
export const hide_projectCard_popup = () => {
  return {
    type: HIDE_PROJECT_CARD_POPUP,
  };
};
//=======
export const SHOW_ADD_MEMBER_POPUP = "SHOW_ADD_MEMBER_POPUP";
export const show_addmember_popup = () => {
  return {
    type: SHOW_ADD_MEMBER_POPUP,
  };
};
export const HIDE_ADD_MEMBER_POPUP = "HIDE_ADD_MEMBER_POPUP";
export const hide_addmember_popup = () => {
  return {
    type: HIDE_ADD_MEMBER_POPUP,
  };
};
//========
export const CLEAR_PROJECT_CARD_HOLD = "CLEAR_PROJECT_CARD_HOLD";

export const clear_projectCard_hold = () => {
  return {
    type: CLEAR_PROJECT_CARD_HOLD,
  };
};

export const DRAWER_OPENED = "DRAWER_OPENED";
export const DRAWER_CLOSED = "DRAWER_CLOSED";

export const open_app_drawer = () => {
  return {
    type: DRAWER_OPENED,
  };
};

export const close_app_drawer = () => {
  return {
    type: DRAWER_CLOSED,
  };
};

// header - project - icon
export const SHOW_HEADER_PROJECT_ICON_POPUP = "SHOW_HEADER_PROJECT_ICON_POPUP";
export const show_header_projectIcon_popup = ({ anchor }) => {
  return {
    type: SHOW_HEADER_PROJECT_ICON_POPUP,
    anchor,
  };
};

export const HIDE_HEADER_PROJECT_ICON_POPUP = "HIDE_HEADER_PROJECT_ICON_POPUP";
export const hide_header_projectIcon_popup = () => {
  return {
    type: HIDE_HEADER_PROJECT_ICON_POPUP,
  };
};
//header - project - profile
export const SHOW_HEADER_PROFILE_POPUP = "SHOW_HEADER_PROFILE_POPUP";
export const show_header_profile_popup = ({ anchor }) => {
  return {
    type: SHOW_HEADER_PROFILE_POPUP,
    anchor,
  };
};
export const HIDE_HEADER_PROFILE_POPUP = "HIDE_HEADER_PROFILE_POPUP";
export const hide_header_profile_popup = () => {
  return {
    type: HIDE_HEADER_PROFILE_POPUP,
  };
};

//header - project - information
export const SHOW_HEADER_PROJECT_INFO_POPUP = "SHOW_HEADER_PROJECT_INFO_POPUP";
export const show_header_projectInfo_popup = ({ anchor }) => {
  return {
    type: SHOW_HEADER_PROJECT_INFO_POPUP,
    anchor,
  };
};
export const HIDE_HEADER_PROJECT_INFO_POPUP = "HIDE_HEADER_PROJECT_INFO_POPUP";
export const hide_header_projectInfo_popup = () => {
  return {
    type: HIDE_HEADER_PROJECT_INFO_POPUP,
  };
};



//header - addButton
export const SHOW_HEADER_ADD_BUTTON_POPUP = "SHOW_HEADER_ADD_BUTTON_POPUP";
export const show_header_addButton_popup = ({ anchor }) => {
  return {
    type: SHOW_HEADER_ADD_BUTTON_POPUP,
    anchor,
  };
};
export const HIDE_HEADER_ADD_BUTTON_POPUP = "HIDE_HEADER_ADD_BUTTON_POPUP";
export const hide_header_addButton_popup = () => {
  return {
    type: HIDE_HEADER_ADD_BUTTON_POPUP,
  };
};

// filterbar - popup
export const SHOW_HEADER_FILTER_POPUP = "SHOW_HEADER_FILTER_POPUP";
export const show_header_filter_popup = ({ anchor, content }) => {
  return {
    type: SHOW_HEADER_FILTER_POPUP,
    anchor,
    content,
  };
};

export const HIDE_HEADER_FILTER_POPUP = "HIDE_HEADER_FILTER_POPUP";
export const hide_header_filter_popup = () => {
  return {
    type: HIDE_HEADER_FILTER_POPUP,
  };
};

export const SHOW_INVITE_POPUP = "SHOW_INVITE_POPUP";
export const show_invite_popup = () => {
  return {
    type: SHOW_INVITE_POPUP
  }
};

export const HIDE_INVITE_POPUP = "HIDE_INVITE_POPUP";
export const hide_invite_popup = () => {
  return {
    type: HIDE_INVITE_POPUP
  }
};
