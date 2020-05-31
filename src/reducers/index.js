import { loadInitialData } from "../data/database";
import { PROJECT_CHANGED, PROJECT_SELECTED } from "../actions";
const devId = "user-scott";

const initialUserState = { ...loadInitialData(devId).user };

export const user = (state = initialUserState, action) => {
  return {
    ...state,
  };
};

const initialWorkspace = { ...loadInitialData(devId).currentWorkspace };

export const workspace = (state = initialWorkspace, action) => {
  switch (action.type) {
    default:
      return {
        ...state,
      };
  }
};

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
