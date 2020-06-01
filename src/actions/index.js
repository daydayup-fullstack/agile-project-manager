import { db_columns, db_tasks } from "../data/database";

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

export const SHOW_PROJECT_CARD_POPUP = "SHOW_PROJECT_CARD_POPUP";
export const show_projectCard_popup = ({ anchor }) => {
  return {
    type: SHOW_PROJECT_CARD_POPUP,
    shouldShow: true,
    anchor,
  };
};

export const HIDE_PROJECT_CARD_POPUP = "HIDE_PROJECT_CARD_POPUP";
export const hide_projectCard_popup = () => {
  return {
    type: HIDE_PROJECT_CARD_POPUP,
    shouldShow: false,
  };
};

export const CLEAR_PROJECT_CARD_HOLD = "CLEAR_PROJECT_CARD_HOLD";

export const clear_projectCard_hold = () => {
  return {
    type: CLEAR_PROJECT_CARD_HOLD,
    payload: true
  };
};