import { db_projects, db_workspaces } from "../data/database";
import _ from 'lodash';
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
  HIDE_TASK_ASSIGNEE_SCROLLABLE_POPUP,
  PROJECT_CHANGED,
  PROJECT_STAR_ADDED,
  PROJECT_STAR_REMOVED,
  SHOW_HEADER_ADD_BUTTON_POPUP,
  SHOW_HEADER_FILTER_POPUP,
  SHOW_HEADER_PROFILE_POPUP,
  SHOW_HEADER_PROJECT_ICON_POPUP,
  SHOW_HEADER_PROJECT_INFO_POPUP,
  SHOW_PROJECT_CARD_POPUP,
  SHOW_ADD_MEMBER_POPUP,
  SHOW_TASK_ASSIGNEE_SCROLLABLE_POPUP,
  SET_TASK_ASSIGNEE,
  CHANGE_NEW_TASK_DISPLAY,
  CHANGE_CALENDAR_DISPLAY,
  SHOW_TASKCARD_CONTEXT_MENU_POPUP,
  HIDE_TASKCARD_CONTEXT_MENU_POPUP,
  SHOW_COLUMN_POPUP,
  HIDE_COLUMN_POPUP,
  PROJECT_DELETED,
  PROJECT_ADDED,
  WORKSPACE_CHANGED,
  USER_LOGIN,
  USER_LOGOUT,
  INIT_USER_SUCCESS,
  INIT_USER_FAILED,
  INIT_USER_REQUESTED,
  PROJECT_SELECTED_SUCCESS,
  PROJECT_SELECTED_REQUESTED,
  PROJECT_SELECTED_FAILED,
  SHOW_CALENDAR_POPUP,
  HIDE_CALENDAR_POPUP,
  SET_TASK_DUE_DAY,
  MEMBER_LIST
} from "../actions";

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
  ui_assignee_scroll_popup: {
    shouldShow: false,
    anchor: { x: 0, y: 0, width: 0, height: 0 },
  },
  ui_isWorkspaceLoading: false,
  ui_isProjectLoading: false,
  ui_calendar_popup: {
    shouldShow: false,
    anchor: { x: 0, y: 0, width: 0, height: 0}
  }
};

export const app = (state = initialAppState, action) => {
  switch (action.type) {
    case INIT_USER_REQUESTED: {
      return {
        ...state,
        ui_isWorkspaceLoading: true,
      };
    }

    case INIT_USER_SUCCESS: {
      return {
        ...state,
        ui_isWorkspaceLoading: false,
      };
    }

    case INIT_USER_FAILED: {
      return {
        ...state,
        ui_isWorkspaceLoading: false,
      };
    }

    case PROJECT_SELECTED_REQUESTED: {
      return {
        ...state,
        ui_isProjectLoading: true,
      };
    }

    case PROJECT_SELECTED_SUCCESS: {
      return {
        ...state,
        ui_isProjectLoading: false,
      };
    }

    case PROJECT_SELECTED_FAILED: {
      return {
        ...state,
        ui_isProjectLoading: false,
      };
    }

    //========
    case SHOW_CALENDAR_POPUP: {
      return {
        ...state,
        ui_calendar_popup: {
          shouldShow: true,
          anchor: action.payload.anchor,
          calendarId: action.payload.calendarId
        }
      }
    }

    case HIDE_CALENDAR_POPUP: {
      return {
        ...state,
        ui_calendar_popup: {
          shouldShow: false,
        }
      }
    }
    //========
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

    case SHOW_TASK_ASSIGNEE_SCROLLABLE_POPUP:
      return {
        ...state,
        ui_assignee_scroll_popup: {
          shouldShow: true,
          anchor: action.anchor,
          assigneeId: action.assigneeId
        }
      };

    case HIDE_TASK_ASSIGNEE_SCROLLABLE_POPUP:
      return {
        ...state,
        ui_assignee_scroll_popup: {
          shouldShow: false,
        }
      }

    
    default:
      return {
        ...state,
      };
  }
};
// ============= USER reducers ==================

const initialUserState = {
  id: "",
  firstName: "",
  lastName: "",
  email: "",
  privateProjects: [],
  avatar: "",
  colorIndex: 0,
  starredProjects: [],
  workspaces: [],
  isLoggedIn: false,
};

export const user = (state = initialUserState, action) => {
  switch (action.type) {
    case USER_LOGIN: {
      return {
        ...state,
        id: action.userId,
      };
    }
    case INIT_USER_SUCCESS: {
      return {
        ...state,
        ...action.user,
        isLoggedIn: true,
      };
    }
    case INIT_USER_FAILED: {
      return {
        ...state,
        error: action.error,
      };
    }
    case USER_LOGOUT: {
      return {
        ...state,
        isLoggedIn: false,
      };
    }
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

    default:
      return {
        ...state,
      };
  }
};
// ============= WORKSPACE reducers ==================

const initialWorkspace = {
  type: "",
  projectOrder: [],
  members: [],
  description: "",
  name: "",
};

export const workspace = (state = initialWorkspace, action) => {
  switch (action.type) {
    case INIT_USER_SUCCESS: {
      return {
        ...state,
        ...action.workspace,
      };
    }
    case INIT_USER_FAILED: {
      return {
        ...state,
        error: action.error,
      };
    }
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
    case PROJECT_SELECTED_FAILED: {
      return {
        ...state,
        error: action.error,
      };
    }
    case PROJECT_SELECTED_SUCCESS:
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

    case SET_TASK_ASSIGNEE:
      return {
        ...state,
        tasks: {
          ...state.tasks,
          [action.assigneeId]:{
            ...state.tasks[action.assigneeId],
            assignedUserId:action.user
            
          }
        }
      }
    case SET_TASK_DUE_DAY:{
      return {
        ...state,
        tasks: {
          ...state.tasks,
          [action.payload.calendarId]:{
            ...state.tasks[action.payload.calendarId],
            dueDate: action.payload.dueDate,
          }
        }
      }
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
const projectsInitial = [];

export const allProjects = (state = projectsInitial, action) => {
  switch (action.type) {
    case INIT_USER_SUCCESS: {
      return [...action.allProjects];
    }
    case INIT_USER_FAILED: {
      return [];
    }
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

//=======Get all members info==========


export const allMembers = (state ={}, action) => {
  switch (action.type) {
    case MEMBER_LIST:{
      return{
        ...state,
        ..._.mapKeys(action.payload,'id') 
      };
    }
    default:
      return state;
  }
};
