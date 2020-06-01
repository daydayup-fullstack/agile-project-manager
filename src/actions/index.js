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

export const CLEAR_PROJECT_CARD_HOLD = "CLEAR_PROJECT_CARD_HOLD";

export const clear_projectCard_hold = () => {
  return {
    type: CLEAR_PROJECT_CARD_HOLD,
  };
};
