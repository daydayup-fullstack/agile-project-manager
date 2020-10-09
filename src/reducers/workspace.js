import {
    INIT_USER_SUCCESS,
    INIT_USER_FAILED,
    PROJECT_ADDED,
    WORKSPACE_CHANGED, ADDING_MEMBERS, ADDING_MEMBERS_FAILED,
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

        case ADDING_MEMBERS: {
            return {
                ...state,
                allMembers: [...action.allMembers]
            }
        }

        case ADDING_MEMBERS_FAILED: {
            return {
                ...state,
                error: action.error
            }
        }

        default:
            return {
                ...state,
            };
    }
};
