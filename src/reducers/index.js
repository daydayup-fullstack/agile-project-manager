import { loadInitialData } from "../data/database";
import {
  CLEAR_PROJECT_CARD_HOLD,
  HIDE_PROJECT_CARD_POPUP,
  PROJECT_CHANGED,
  PROJECT_COLOR_SELECTED,
  PROJECT_ICON_SELECTED,
  PROJECT_SELECTED,
  PROJECT_STAR_ADDED,
  PROJECT_STAR_REMOVED,
  SHOW_PROJECT_CARD_POPUP,
} from "../actions";
const devId = "user-scott";

// ============= APP reducers ==================
const initialAppState = {
  ui_projectCard_popup: {
    shouldShow: false,
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

    case CLEAR_PROJECT_CARD_HOLD:
      return {
        ...state,
        ui_projectCard_popup: {},
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
