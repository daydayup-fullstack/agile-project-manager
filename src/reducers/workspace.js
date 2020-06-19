import {
    INIT_USER_SUCCESS,
    INIT_USER_FAILED,
    PROJECT_ADDED,
    WORKSPACE_CHANGED,
} from "../actions"

const initialWorkspace = {
    type: "",
    projectsInOrder: [],
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
            return {
                ...state,
                ...action.workspace,
            };
        }

        case PROJECT_ADDED: {
            return {
                ...state,
                projectsInOrder: [action.project.id, ...state.projectsInOrder],
            };
        }

        default:
            return {
                ...state,
            };
    }
};
