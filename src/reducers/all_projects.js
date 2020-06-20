import {
    PROJECT_CHANGED,
    PROJECT_DELETED,
    PROJECT_ADDED,
    WORKSPACE_CHANGED,
    INIT_USER_SUCCESS,
    INIT_USER_FAILED,
    WORKSPACE_CHANGED_FAILED,
} from "../actions";

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
            return [...action.allProjects];
        }

        case WORKSPACE_CHANGED_FAILED: {
            return [];
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
            return [action.project, ...state];
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
