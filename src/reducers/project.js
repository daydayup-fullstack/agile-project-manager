import {
    SET_TASK_ASSIGNEE,
    PROJECT_SELECTED_SUCCESS,
    PROJECT_SELECTED_FAILED,
    SET_TASK_DUE_DAY,
    PROJECT_CHANGED,
    WORKSPACE_CHANGED,
    SHOW_COMPLETE_TASKS_SUCCEED,
    SHOW_ALL_TASKS_SUCCEED,
    SHOW_INCOMPLETE_TASKS_SUCCEED,
    CHOOSE_ALLOWED_TASKS
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
    displayedTasks:'All Tasks'
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

        case SHOW_COMPLETE_TASKS_SUCCEED:
            const completedTasksArray = (Object.keys(action.tasks)).filter(taskId => { return action.tasks[taskId].isCompleted === true })
            const completeTasks = Object.keys(action.tasks)
                .filter(key => completedTasksArray.includes(key))
                .reduce((obj, key) => {
                    obj[key] = action.tasks[key];
                    return obj;
                }, {});
            return {
                ...state,
                tasks: completeTasks
            }

        case SHOW_ALL_TASKS_SUCCEED:
            return {
                ...state,
                tasks: action.tasks,
            }

        case SHOW_INCOMPLETE_TASKS_SUCCEED:
            const incompletedTasksArray = (Object.keys(action.tasks)).filter(taskId => { return action.tasks[taskId].isCompleted === false })
            const incompleteTasks = Object.keys(action.tasks)
                .filter(key => incompletedTasksArray.includes(key))
                .reduce((obj, key) => {
                    obj[key] = action.tasks[key];
                    return obj;
                }, {});
            return {
                ...state,
                tasks: incompleteTasks,
            }

        case CHOOSE_ALLOWED_TASKS:
            return{
                ...state,
                displayedTasks:action.displayedTasks
            }
        default:
            return {
                ...state,
            };
    }
};
