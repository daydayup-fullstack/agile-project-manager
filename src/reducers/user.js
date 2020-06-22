import {
    PROJECT_STAR_ADDED,
    PROJECT_STAR_REMOVED,
    USER_LOGIN,
    USER_LOGOUT,
    INIT_USER_SUCCESS,
    INIT_USER_FAILED,
    PROJECT_DELETED,
    WORKSPACE_CHANGED,
    GUEST_LOGIN, UPDATE_USER,
} from "../actions";
import {updateUserToServer} from "../apis/api";

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
        case GUEST_LOGIN: {
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
            const index = state.workspaces.indexOf(action.workspace.id);
            const newWorkspaces = [...state.workspaces];

            newWorkspaces.splice(index, 1);
            newWorkspaces.splice(0, 0, action.workspace.id);

            // todo - possible error handling here
            updateUserToServer({id: state.id, workspaces: newWorkspaces});

            return {
                ...state,
                workspaces: [...newWorkspaces],
            };
        }

        case UPDATE_USER: {
            return {
                ...state,
                ...action.user
            }
        }

        default:
            return {
                ...state,
            };
    }
};
