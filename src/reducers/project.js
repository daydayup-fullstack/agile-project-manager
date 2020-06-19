import {
    SET_TASK_ASSIGNEE,
    PROJECT_SELECTED_SUCCESS,
    PROJECT_SELECTED_FAILED,
    SET_TASK_DUE_DAY,
    PROJECT_CHANGED,
    WORKSPACE_CHANGED,
} from "../actions";

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

        case WORKSPACE_CHANGED: {
            return {};
        }

        case SET_TASK_ASSIGNEE:
            return {
                ...state,
                tasks: {
                    ...state.tasks,
                    [action.assigneeId]: {
                        ...state.tasks[action.assigneeId],
                        assignedUserId: action.user,
                    },
                },
            };

        case SET_TASK_DUE_DAY: {
            return {
                ...state,
                tasks: {
                    ...state.tasks,
                    [action.payload.calendarId]: {
                        ...state.tasks[action.payload.calendarId],
                        dueDate: action.payload.dueDate,
                    },
                },
            };
        }

        default:
            return {
                ...state,
            };
    }
};
