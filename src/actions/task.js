export const CHANGE_NEW_TASK_DISPLAY = "CHANGE_NEW_TASK_DISPLAY";
export const changeNewTaskDisplay = (newTaskDisplay) => {
    return {
        type: CHANGE_NEW_TASK_DISPLAY,
        newTaskDisplay,
    };
};

export const CHANGE_CALENDAR_DISPLAY = "CHANGE_CALENDAR_DISPLAY";
export const changeCalendarDisplay = (calendarDisplay) => {
    return {
        type: CHANGE_CALENDAR_DISPLAY,
        calendarDisplay,
    };
};


export const SET_TASK_DUE_DAY = "SET_TASK_DUE_DAY";
export const set_task_due_day = ({ dueDate, calendarId }) => {
    return {
        type: SET_TASK_DUE_DAY,
        payload: {
            dueDate,
            calendarId,
        },
    };
};