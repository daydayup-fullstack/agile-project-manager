import {
    CHANGE_NEW_TASK_DISPLAY,
    CHANGE_CALENDAR_DISPLAY,
} from "../actions";


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