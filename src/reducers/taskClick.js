import {ON_TASK_CLICK} from '../actions/task'

const initialClickedTask= {}

export const clickedTask= (state = initialClickedTask, action) => {
    switch (action.type) {
        case ON_TASK_CLICK: {
            return {
                ...state,
                ...action.payload,
            };
        }
        default:
            return {
                ...state,
            };
    }
};