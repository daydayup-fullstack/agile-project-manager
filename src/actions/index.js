import { db_columns, db_tasks } from "../data/database";

// ============== Project ========================
// region- Project related actions
export const PROJECT_SELECTED = "PROJECT_SELECTED";
export const project_selected = (project) => {

  console.log(project);
  return {
    type: PROJECT_SELECTED,
    project,
    // todo - change to dynamic data source
    columns: { ...db_columns },
    tasks: { ...db_tasks },
  };
};

export const PROJECT_CHANGED = "PROJECT_CHANGED";
export const project_changed = (project) => {
  return {
    type: PROJECT_CHANGED,
    project,
  };
};

//-------new task display
export const CHANGE_NEW_TASK_DISPLAY = "CHANGE_NEW_TASK_DISPLAY";
export const changeNewTaskDisplay = (newTaskDisplay) => {
  return {
    type: CHANGE_NEW_TASK_DISPLAY,
    newTaskDisplay,
  };
};

export const CHANGE_CALENDAR_DISPLAY = "CHANGE_CALENDAR_DISPLAY";
export const changeCalendarDisplay = (calendarDisplay) => {
  return {
    type: CHANGE_CALENDAR_DISPLAY,
    calendarDisplay,
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

export const START_CREATING_NEW_TASK = "START_CREATING_NEW_TASK";
export const start_creating_new_task = ({ project }) => {
  return {
    type: START_CREATING_NEW_TASK,
    project,
  };
};

export const ADD_TASK_TO_PROJECT = "ADD_TASK";
export const add_task_to_project = ({ task, column, project }) => {
  return {
    type: ADD_TASK_TO_PROJECT,
    task,
    column,
    project,
  };
};

//endregion

// ================ ui state ======================
// region - ui state actions
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

export const SHOW_HEADER_PROJECT_ICON_POPUP = "SHOW_HEADER_PROJECT_ICON_POPUP";

// - header - project - icon
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

// taskcard - context popup
export const SHOW_TASKCARD_CONTEXT_MENU_POPUP =
  "SHOW_TASKCARD_CONTEXT_MENU_POPUP";
export const show_taskcard_context_menu = ({
  anchor,
  task,
  columnId,
  project,
}) => {
  return {
    type: SHOW_TASKCARD_CONTEXT_MENU_POPUP,
    anchor,
    task,
    project,
    columnId,
  };
};
export const HIDE_TASKCARD_CONTEXT_MENU_POPUP =
  "HIDE_TASKCARD_CONTEXT_MENU_POPUP";
export const hide_taskcard_context_menu = () => {
  return {
    type: HIDE_TASKCARD_CONTEXT_MENU_POPUP,
  };
};

export const SHOW_COLUMN_POPUP = "SHOW_COLUMN_POPUP";
export const show_column_popup = ({ anchor, column }) => {
  return {
    type: SHOW_COLUMN_POPUP,
    anchor,
    column,
  };
};

export const HIDE_COLUMN_POPUP = "HIDE_COLUMN_POPUP";
export const hide_column_popup = () => {
  return {
    type: HIDE_COLUMN_POPUP,
  };
};
//endregion
