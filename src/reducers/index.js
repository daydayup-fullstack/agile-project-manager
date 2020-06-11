import { db_projects, db_workspaces, loadInitialData } from "../data/database";
import {
  DRAWER_CLOSED,
  DRAWER_OPENED,
  HIDE_HEADER_ADD_BUTTON_POPUP,
  HIDE_HEADER_FILTER_POPUP,
  HIDE_HEADER_PROFILE_POPUP,
  HIDE_HEADER_PROJECT_ICON_POPUP,
  HIDE_HEADER_PROJECT_INFO_POPUP,
  HIDE_PROJECT_CARD_POPUP,
  HIDE_ADD_MEMBER_POPUP,
  PROJECT_CHANGED,
  PROJECT_SELECTED,
  PROJECT_STAR_ADDED,
  PROJECT_STAR_REMOVED,
  SHOW_HEADER_ADD_BUTTON_POPUP,
  SHOW_HEADER_FILTER_POPUP,
  SHOW_HEADER_PROFILE_POPUP,
  SHOW_HEADER_PROJECT_ICON_POPUP,
  SHOW_HEADER_PROJECT_INFO_POPUP,
  SHOW_PROJECT_CARD_POPUP,
  SHOW_ADD_MEMBER_POPUP,
  CHANGE_NEW_TASK_DISPLAY,
  CHANGE_CALENDAR_DISPLAY,
  SHOW_TASKCARD_CONTEXT_MENU_POPUP,
  HIDE_TASKCARD_CONTEXT_MENU_POPUP,
  SHOW_COLUMN_POPUP,
  HIDE_COLUMN_POPUP,
  PROJECT_DELETED,
  PROJECT_ADDED,
  INIT_USER,
  WORKSPACE_CHANGED,
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
  ui_taskcard_context_menu: {
    shouldShow: false,
    anchor: { x: 0, y: 0, width: 0, height: 0 },
  },
  ui_column_popup: {
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
    //======
    case HIDE_ADD_MEMBER_POPUP:
      return {
        ...state,
        ui_addmember_popup: {
          ShowPopup: false,
        },
      };
    case SHOW_ADD_MEMBER_POPUP:
      return {
        ...state,
        ui_addmember_popup: {
          ShowPopup: true,
        },
      };
    //======
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

    case SHOW_TASKCARD_CONTEXT_MENU_POPUP:
      return {
        ...state,
        ui_taskcard_context_menu: {
          shouldShow: true,
          anchor: action.anchor,
          task: action.task,
          columnId: action.columnId,
          project: action.project,
          shouldEditTaskName: false,
        },
      };

    case HIDE_TASKCARD_CONTEXT_MENU_POPUP:
      return {
        ...state,
        ui_taskcard_context_menu: {
          shouldShow: false,
        },
      };

    case SHOW_COLUMN_POPUP:
      return {
        ...state,
        ui_column_popup: {
          shouldShow: true,
          anchor: action.anchor,
          column: action.column,
        },
      };

    case HIDE_COLUMN_POPUP: {
      return {
        ...state,
        ui_column_popup: {
          shouldShow: false,
        },
      };
    }

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

    case PROJECT_DELETED: {
      return {
        ...state,
        starredProjects: state.starredProjects.filter(
          (id) => id !== action.project.id
        ),
        privateProjects: state.starredProjects.filter(
          (id) => id !== action.project.id
        ),
      };
    }

    case WORKSPACE_CHANGED: {
      const index = state.workspaces.indexOf(action.workspaceId);
      const newWorkspaces = [...state.workspaces];

      newWorkspaces.splice(index, 1);
      newWorkspaces.splice(0, 0, action.workspaceId);

      return {
        ...state,
        workspaces: [...newWorkspaces],
      };
    }

    case INIT_USER: {
      return {
        ...state,
      };
    }

    default:
      return {
        ...state,
      };
  }
};
// ============= WORKSPACE reducers ==================

const initialWorkspace = {
  ...loadInitialData(devId).currentWorkspace,
};

export const workspace = (state = initialWorkspace, action) => {
  switch (action.type) {
    case WORKSPACE_CHANGED: {
      // todo - future async might be needed
      return {
        id: action.workspaceId,
        ...db_workspaces[action.workspaceId],
      };
    }

    default:
      return {
        ...state,
      };
  }
};

// ============= PROJECT reducers ==================
// current selected project - fetching additional data
const initialProjectState = {
  id: "",
  name: "",
  colorIndex: 0,
  iconIndex: 0,
  createdOn: null,
  dueDate: null,
  columnOrder: [],
  activeUsers: [],
  columns: {},
  tasks: {},
};

export const project = (state = initialProjectState, action) => {
  switch (action.type) {
    case PROJECT_SELECTED:
      const project = {
        ...state,
        ...action.project,
        columns: {
          ...action.columns,
        },
        tasks: {
          ...action.tasks,
        },
      };
      return {
        ...project,
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

// ============= New TaskDisplay reducers ===============

const initialNewTaskDisplay = {
  newTaskDisplay: false,
  calendarDisplay: false,
};

export const taskDisplay = (state = initialNewTaskDisplay, action) => {
  switch (action.type) {
    case CHANGE_NEW_TASK_DISPLAY: {
      return {
        ...state,
        newTaskDisplay: action.newTaskDisplay,
      };
    }
    case CHANGE_CALENDAR_DISPLAY: {
      return {
        ...state,
        calendarDisplay: action.calendarDisplay,
      };
    }
    default:
      return {
        ...state,
      };
  }
};

// ==================== allProjects ======================
const projectsInitial = [...loadInitialData(devId).allProjects];

export const allProjects = (state = projectsInitial, action) => {
  switch (action.type) {
    case WORKSPACE_CHANGED: {
      // todo - future async fetch
      const projects = db_workspaces[action.workspaceId].projectsInOrder.map(
        (id) => db_projects[id]
      );

      return [...projects];
    }

    case PROJECT_CHANGED: {
      const update = action.project;
      let projectIndex;
      state.forEach((p, index) => {
        if (p.id === update.id) {
          projectIndex = index;
        }
      });

      const newState = [...state];
      newState.splice(projectIndex, 1);
      newState.splice(projectIndex, 0, update);

      return [...newState];
    }

    case PROJECT_ADDED: {
      return [...state, action.payload];
    }

    case PROJECT_DELETED: {
      let projectIndex;
      state.forEach((p, index) => {
        if (p.id === action.project.id) {
          projectIndex = index;
        }
      });
      const newState = [...state];
      newState.splice(projectIndex, 1);

      return [...newState];
    }

    default:
      return [...state];
  }
};
