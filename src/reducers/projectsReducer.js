import { generateId } from "../model/utility";

import { projects } from "../model/model";

import {
    CREATE_PROJECT
} from "../actions"

const initialState = {
    // 将从数据库更新，否则无法建立第二个新的project
    projects,
}

const projectsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_PROJECT:
            return {
                ...state,
                projects:
                    [...projects,
                    {
                        id: generateId(),
                        content: {
                            name: action.projectName,
                            colorIndex: Math.floor(Math.random() * 16),
                            createdOn: Date.parse(new Date()) / 1000,
                            isStarred: false,
                        },
                        tasks: {},
                        columns: {},
                        columnOrder: [],
                    }]
            }
        default:
            return state;
    }
}

export default projectsReducer;