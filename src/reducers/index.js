import { loadInitialData } from "../data/database";
import {
  DRAWER_CLOSED,
  DRAWER_OPENED,
  HIDE_HEADER_ADD_BUTTON_POPUP,
  HIDE_HEADER_FILTER_POPUP,
  HIDE_HEADER_PROFILE_POPUP,
  HIDE_HEADER_PROJECT_ICON_POPUP,
  HIDE_HEADER_PROJECT_INFO_POPUP,
  HIDE_PROJECT_CARD_POPUP,
  PROJECT_CHANGED,
  PROJECT_COLOR_SELECTED,
  PROJECT_ICON_SELECTED,
  PROJECT_SELECTED,
  PROJECT_STAR_ADDED,
  PROJECT_STAR_REMOVED,
  SHOW_HEADER_ADD_BUTTON_POPUP,
  SHOW_HEADER_FILTER_POPUP,
  SHOW_HEADER_PROFILE_POPUP,
  SHOW_HEADER_PROJECT_ICON_POPUP,
  SHOW_HEADER_PROJECT_INFO_POPUP,
  SHOW_PROJECT_CARD_POPUP,
  CHANGE_NEW_TASK_DISPLAY,
} from "../actions";
const devId = "user-scott";

// ============= APP reducers ==================
const initialAppState = {
  ui_projectCard_popup: {
    shouldShow: false,
    anchor: { x: 0, y: 0, width: 0, height: 0 },
  },
  ui_drawer: {
    shouldOpen: true,
  },
  ui_header_project_icon_popup: {
    shouldShow: false,
    anchor: { x: 0, y: 0, width: 0, height: 0 },
  },
  ui_header_project_info_popup: {
    shouldShow: false,
    anchor: { x: 0, y: 0, width: 0, height: 0 },
  },
  ui_header_profile_popup: {
    shouldShow: false,
    anchor: { x: 0, y: 0, width: 0, height: 0 },
  },
  ui_header_addButton_popup: {
    shouldShow: false,
    anchor: { x: 0, y: 0, width: 0, height: 0 },
  },
  ui_header_filter_popup: {
    shouldShow: false,
    content: null,
    anchor: { x: 0, y: 0, width: 0, height: 0 },
  },
};

export const app = (state = initialAppState, action) => {
  switch (action.type) {
    case SHOW_PROJECT_CARD_POPUP:
      return {
        ...state,
        ui_projectCard_popup: {
          shouldShow: true,
          anchor: action.anchor,
        },
      };
    case HIDE_PROJECT_CARD_POPUP:
      return {
        ...state,
        ui_projectCard_popup: {
          shouldShow: false,
        },
      };

    case DRAWER_OPENED:
      return {
        ...state,
        ui_drawer: {
          shouldOpen: true,
        },
      };
    case DRAWER_CLOSED:
      return {
        ...state,
        ui_drawer: {
          shouldOpen: false,
        },
      };

    case SHOW_HEADER_PROJECT_ICON_POPUP:
      return {
        ...state,
        ui_header_project_icon_popup: {
          shouldShow: true,
          anchor: action.anchor,
        },
      };
    case HIDE_HEADER_PROJECT_ICON_POPUP:
      return {
        ...state,
        ui_header_project_icon_popup: {
          shouldShow: false,
        },
      };

    case SHOW_HEADER_PROJECT_INFO_POPUP:
      return {
        ...state,
        ui_header_project_info_popup: {
          shouldShow: true,
          anchor: action.anchor,
        },
      };

    case HIDE_HEADER_PROJECT_INFO_POPUP: {
      return {
        ...state,
        ui_header_project_info_popup: {
          shouldShow: false,
        },
      };
    }

    case SHOW_HEADER_PROFILE_POPUP:
      return {
        ...state,
        ui_header_profile_popup: {
          shouldShow: true,
          anchor: action.anchor,
        },
      };

    case HIDE_HEADER_PROFILE_POPUP: {
      return {
        ...state,
        ui_header_profile_popup: {
          shouldShow: false,
        },
      };
    }

    case SHOW_HEADER_ADD_BUTTON_POPUP:
      return {
        ...state,
        ui_header_addButton_popup: {
          shouldShow: true,
          anchor: action.anchor,
        },
      };

    case HIDE_HEADER_ADD_BUTTON_POPUP:
      return {
        ...state,
        ui_header_addButton_popup: {
          shouldShow: false,
        },
      };

    case SHOW_HEADER_FILTER_POPUP:
      return {
        ...state,
        ui_header_filter_popup: {
          shouldShow: true,
          anchor: action.anchor,
          content: action.content,
        },
      };

    case HIDE_HEADER_FILTER_POPUP:
      return {
        ...state,
        ui_header_filter_popup: {
          shouldShow: false,
        },
      };

    default:
      return {
        ...state,
      };
  }
};
// ============= USER reducers ==================

const initialUserState = { ...loadInitialData(devId).user };

export const user = (state = initialUserState, action) => {
  switch (action.type) {
    case PROJECT_STAR_ADDED: {
      return {
        ...state,
        starredProjects: [...state.starredProjects, action.project.id],
      };
    }

    case PROJECT_STAR_REMOVED: {
      return {
        ...state,
        starredProjects: state.starredProjects.filter(
          (id) => id !== action.project.id
        ),
      };
    }

    default:
      return {
        ...state,
      };
  }
};
// ============= WORKSPACE reducers ==================

const initialWorkspace = { ...loadInitialData(devId).currentWorkspace };

export const workspace = (state = initialWorkspace, action) => {
  switch (action.type) {
    case PROJECT_ICON_SELECTED:
      return {
        ...state,
        projects: {
          ...state.projects,
          [action.project.id]: action.project,
        },
      };

    case PROJECT_COLOR_SELECTED:
      return {
        ...state,
        projects: {
          ...state.projects,
          [action.project.id]: action.project,
        },
      };
    default:
      return {
        ...state,
      };
  }
};

// ============= PROJECT reducers ==================

export const project = (state = {}, action) => {
  switch (action.type) {
    case PROJECT_SELECTED:
      return {
        ...state,
        ...action.payload.project,
        columns: { ...action.payload.columns },
        tasks: { ...action.payload.tasks },
      };

    case PROJECT_CHANGED: {
      return {
        ...state,
        ...action.project,
      };
    }

    case PROJECT_ICON_SELECTED:
      return {
        ...state,
        iconIndex: action.payload,
      };

    case PROJECT_COLOR_SELECTED:
      return {
        ...state,
        colorIndex: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};

const initialNewTaskDisplay = {
  newTaskDisplay: false,
};

export const taskDisplay = (state = initialNewTaskDisplay, action) => {
  switch (action.type) {
    case CHANGE_NEW_TASK_DISPLAY: {
      return {
        ...state,
        newTaskDisplay: action.newTaskDisplay,
      };
    }
    default:
      return {
        ...state,
      };
  }
};
