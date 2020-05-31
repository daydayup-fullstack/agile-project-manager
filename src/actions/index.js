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
