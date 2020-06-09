import backend from "../apis/backend";
import { login } from "../model/utility";
// ============== User ========================
//
export const INIT_USER_REQUESTED = "INIT_USER";
export const init_user_requested = () => {
  return {
    type: INIT_USER_REQUESTED,
  };
};
export const INIT_USER_SUCCESS = "INIT_USER_SUCCESS";
const init_user_success = (response) => {
  return {
    type: INIT_USER_SUCCESS,
    user: response.data.user || {},
    workspace: response.data.workspace || {},
    allProjects: response.data.allProjects || [],
  };
};
export const INIT_USER_FAILED = "INIT_USER_FAILED";
const init_user_failed = (e) => {
  return {
    type: INIT_USER_FAILED,
    error: e,
  };
};
export const init_user = (userId) => async (dispatch) => {
  try {
    const response = await backend.get(`/users/${userId}`);
    dispatch(init_user_success(response));
  } catch (e) {
    dispatch(init_user_failed(e));
  }
};

export const USER_LOGIN = "USER_LOGIN";
export const login_user = ({ username, password }) => async (dispatch) => {
  const result = await login(username, password);

  let { userId } = JSON.parse(result);

  dispatch({
    type: USER_LOGIN,
    userId: userId || "",
  });
};

export const USER_LOGOUT = "USER_LOGOUT";
export const logout_user = () => {
  return {
    type: USER_LOGOUT,
  };
};

// ============== Workspace ====================
export const WORKSPACE_CHANGED = "WORKSPACE_CHANGED";
export const change_workspace = (workspaceId) => {
  return {
    type: WORKSPACE_CHANGED,
    workspaceId,
  };
};

// ============== Project ========================
// region- Project related actions
// export const PROJECT_SELECTED = "PROJECT_SELECTED";
// export const project_selected = (project) => {
//   let columns = {};
//   let tasks = {};
//
//   if (!project.columns) {
//     columns = { ...db_columns };
//   }
//
//   if (!project.tasks) {
//     tasks = { ...db_tasks };
//   }
//
//   // todo - change to dynamic data source
//   return {
//     type: PROJECT_SELECTED,
//     project,
//     columns: {
//       ...project.columns,
//       ...columns,
//     },
//     tasks: {
//       ...project.tasks,
//       ...tasks,
//     },
//   };
// };

export const PROJECT_SELECTED_REQUESTED = "PROJECT_SELECTED_REQUESTED";
const project_selected_requested = () => {
  return {
    type: PROJECT_SELECTED_REQUESTED,
  };
};

export const PROJECT_SELECTED_SUCCESS = "PROJECT_SELECTED_SUCCESS";
const project_selected_success = (project, response) => {
  console.log(response.data);
  return {
    type: PROJECT_SELECTED_SUCCESS,
    project,
    columns: {
      ...project.columns,
      ...response.data.columns,
    },
    tasks: {
      ...project.tasks,
      ...response.data.tasks,
    },
  };
};

export const PROJECT_SELECTED_FAILED = "PROJECT_SELECTED_FAILED";
const project_selected_failed = (error) => {
  return {
    type: PROJECT_SELECTED_FAILED,
    error: error,
  };
};

export const project_selected = (project) => async (dispatch) => {
  try {
    dispatch(project_selected_requested());
    const response = await backend.get(`/projects/${project.id}`);
    dispatch(project_selected_success(project, response));
  } catch (e) {
    dispatch(project_selected_failed(e));
  }
};

export const PROJECT_CHANGED = "PROJECT_CHANGED";
export const project_changed = (project) => {
  return {
    type: PROJECT_CHANGED,
    project,
  };
};

export const PROJECT_ADDED = "PROJECT_ADDED";
export const project_added = (project) => {
  return {
    type: PROJECT_ADDED,
    payload: project,
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
