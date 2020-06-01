import { loadInitialData } from "../data/database";
import {
  CLEAR_PROJECT_CARD_HOLD,
  HIDE_PROJECT_CARD_POPUP,
  PROJECT_CHANGED,
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
    clearHold: false,
  },
};

export const app = (state = initialAppState, action) => {
  switch (action.type) {
    case SHOW_PROJECT_CARD_POPUP:
      return {
        ...state,
        ui_projectCard_popup: {
          shouldShow: action.shouldShow,
          anchor: action.anchor,
        },
      };
    case HIDE_PROJECT_CARD_POPUP:
      return {
        ...state,
        ui_projectCard_popup: {
          shouldShow: action.shouldShow,
        },
      };

    case CLEAR_PROJECT_CARD_HOLD:
      return {
        ...state,
        ui_projectCard_popup: {
          clearHold: action.payload,
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
  }

  return {
    ...state,
  };
};
// ============= WORKSPACE reducers ==================

const initialWorkspace = { ...loadInitialData(devId).currentWorkspace };

export const workspace = (state = initialWorkspace, action) => {
  switch (action.type) {
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

    default:
      return {
        ...state,
      };
  }
};
