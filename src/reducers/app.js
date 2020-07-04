import {
    DRAWER_CLOSED,
    DRAWER_OPENED,
    HIDE_HEADER_ADD_BUTTON_POPUP,
    HIDE_HEADER_FILTER_POPUP,
    HIDE_HEADER_PROFILE_POPUP,
    HIDE_HEADER_PROJECT_ICON_POPUP,
    HIDE_HEADER_PROJECT_INFO_POPUP,
    HIDE_PROJECT_CARD_POPUP,
    HIDE_ADD_MEMBER_POPUP,
    HIDE_TASK_ASSIGNEE_SCROLLABLE_POPUP,
    SHOW_HEADER_ADD_BUTTON_POPUP,
    SHOW_HEADER_FILTER_POPUP,
    SHOW_HEADER_PROFILE_POPUP,
    SHOW_HEADER_PROJECT_ICON_POPUP,
    SHOW_HEADER_PROJECT_INFO_POPUP,
    SHOW_PROJECT_CARD_POPUP,
    SHOW_ADD_MEMBER_POPUP,
    SHOW_TASK_ASSIGNEE_SCROLLABLE_POPUP,
    SHOW_TASKCARD_CONTEXT_MENU_POPUP,
    HIDE_TASKCARD_CONTEXT_MENU_POPUP,
    SHOW_COLUMN_POPUP,
    HIDE_COLUMN_POPUP,
    INIT_USER_REQUESTED,
    PROJECT_SELECTED_REQUESTED,
    PROJECT_SELECTED_FAILED,
    PROJECT_SELECTED_SUCCESS,
    SHOW_CALENDAR_POPUP,
    HIDE_CALENDAR_POPUP,
    INIT_USER_SUCCESS,
    INIT_USER_FAILED,
    SHOW_PROFILE_SETTINGS,
    HIDE_PROFILE_SETTINGS,
    SET_SCROLL_VALUE,
    NAV_LINK_CLICKED,
    SET_SORTER,
    SORTER,
    TASK_FILTER,
    QUICK_FILTER,
    SET_TASK_FILTER,
    SET_QUICK_FILTER,
    SHOULD_SHOW_REGISTER,
} from "../actions";

const initialAppState = {
    ui_projectCard_popup: {
        shouldShow: false,
        anchor: {x: 0, y: 0, width: 0, height: 0},
    },
    ui_drawer: {
        shouldOpen: true,
    },
    ui_header_project_icon_popup: {
        shouldShow: false,
        anchor: {x: 0, y: 0, width: 0, height: 0},
    },
    ui_header_project_info_popup: {
        shouldShow: false,
        anchor: {x: 0, y: 0, width: 0, height: 0},
    },
    ui_header_profile_popup: {
        shouldShow: false,
        anchor: {x: 0, y: 0, width: 0, height: 0},
    },
    ui_header_addButton_popup: {
        shouldShow: false,
        anchor: {x: 0, y: 0, width: 0, height: 0},
    },
    ui_header_filter_popup: {
        shouldShow: false,
        content: null,
        anchor: {x: 0, y: 0, width: 0, height: 0},
    },
    ui_taskcard_context_menu: {
        shouldShow: false,
        anchor: {x: 0, y: 0, width: 0, height: 0},
    },
    ui_column_popup: {
        shouldShow: false,
        anchor: {x: 0, y: 0, width: 0, height: 0},
    },
    ui_assignee_scroll_popup: {
        shouldShow: false,
        anchor: {x: 0, y: 0, width: 0, height: 0},
    },
    ui_calendar_popup: {
        shouldShow: false,
        anchor: {x: 0, y: 0, width: 0, height: 0},
    },
    ui_isWorkspaceLoading: true,
    ui_isProjectLoading: false,
    ui_profile_settings: {
        shouldShow: false,
    },
    ui_scroll_left: 0,
    ui_navlink_selector: {
        section: "",
        index: -1,
    },

    ui_task_filter_type: TASK_FILTER.all,
    ui_quick_filter_type: QUICK_FILTER.none,
    ui_sorter_type: SORTER.none,
    ui_show_register_account: false,
};

export const app = (state = initialAppState, action) => {
    switch (action.type) {
        case INIT_USER_REQUESTED: {
            return {
                ...state,
                ui_isWorkspaceLoading: true,
            };
        }

        case INIT_USER_SUCCESS: {
            return {
                ...state,
                ui_isWorkspaceLoading: false,
            };
        }

        case INIT_USER_FAILED: {
            return {
                ...state,
                ui_isWorkspaceLoading: false,
            };
        }

        case PROJECT_SELECTED_REQUESTED: {
            return {
                ...state,
                ui_isProjectLoading: true,
            };
        }

        case PROJECT_SELECTED_SUCCESS: {
            return {
                ...state,
                ui_isProjectLoading: false,
            };
        }

        case PROJECT_SELECTED_FAILED: {
            return {
                ...state,
                ui_isProjectLoading: false,
            };
        }

        case SHOW_CALENDAR_POPUP: {
            return {
                ...state,
                ui_calendar_popup: {
                    shouldShow: true,
                    anchor: action.payload.anchor,
                    calendarId: action.payload.calendarId,
                },
            };
        }

        case HIDE_CALENDAR_POPUP: {
            return {
                ...state,
                ui_calendar_popup: {
                    shouldShow: false,
                },
            };
        }

        case SHOW_PROJECT_CARD_POPUP:
            return {
                ...state,
                ui_projectCard_popup: {
                    shouldShow: true,
                    anchor: action.anchor,
                },
            };
        case HIDE_PROJECT_CARD_POPUP:
            return {
                ...state,
                ui_projectCard_popup: {
                    shouldShow: false,
                },
            };

        case HIDE_ADD_MEMBER_POPUP:
            return {
                ...state,
                ui_addmember_popup: {
                    ShowPopup: false,
                },
            };
        case SHOW_ADD_MEMBER_POPUP:
            return {
                ...state,
                ui_addmember_popup: {
                    ShowPopup: true,
                },
            };

        case DRAWER_OPENED:
            return {
                ...state,
                ui_drawer: {
                    shouldOpen: true,
                },
            };
        case DRAWER_CLOSED:
            return {
                ...state,
                ui_drawer: {
                    shouldOpen: false,
                },
            };

        case SHOW_HEADER_PROJECT_ICON_POPUP:
            return {
                ...state,
                ui_header_project_icon_popup: {
                    shouldShow: true,
                    anchor: action.anchor,
                },
            };
        case HIDE_HEADER_PROJECT_ICON_POPUP:
            return {
                ...state,
                ui_header_project_icon_popup: {
                    shouldShow: false,
                },
            };

        case SHOW_HEADER_PROJECT_INFO_POPUP:
            return {
                ...state,
                ui_header_project_info_popup: {
                    shouldShow: true,
                    anchor: action.anchor,
                },
            };

        case HIDE_HEADER_PROJECT_INFO_POPUP: {
            return {
                ...state,
                ui_header_project_info_popup: {
                    shouldShow: false,
                },
            };
        }

        case SHOW_HEADER_PROFILE_POPUP:
            return {
                ...state,
                ui_header_profile_popup: {
                    shouldShow: true,
                    anchor: action.anchor,
                },
            };

        case HIDE_HEADER_PROFILE_POPUP: {
            return {
                ...state,
                ui_header_profile_popup: {
                    shouldShow: false,
                },
            };
        }

        case SHOW_HEADER_ADD_BUTTON_POPUP:
            return {
                ...state,
                ui_header_addButton_popup: {
                    shouldShow: true,
                    anchor: action.anchor,
                },
            };

        case HIDE_HEADER_ADD_BUTTON_POPUP:
            return {
                ...state,
                ui_header_addButton_popup: {
                    shouldShow: false,
                },
            };

        case SHOW_HEADER_FILTER_POPUP:
            return {
                ...state,
                ui_header_filter_popup: {
                    shouldShow: true,
                    anchor: action.anchor,
                    content: action.content,
                },
            };

        case HIDE_HEADER_FILTER_POPUP:
            return {
                ...state,
                ui_header_filter_popup: {
                    shouldShow: false,
                },
            };

        case SHOW_TASKCARD_CONTEXT_MENU_POPUP:
            return {
                ...state,
                ui_taskcard_context_menu: {
                    shouldShow: true,
                    anchor: action.anchor,
                    task: action.task,
                    columnId: action.columnId,
                    project: action.project,
                    shouldEditTaskName: false,
                },
            };

        case HIDE_TASKCARD_CONTEXT_MENU_POPUP:
            return {
                ...state,
                ui_taskcard_context_menu: {
                    shouldShow: false,
                },
            };

        case SHOW_COLUMN_POPUP:
            return {
                ...state,
                ui_column_popup: {
                    shouldShow: true,
                    anchor: action.anchor,
                    column: action.column,
                },
            };

        case HIDE_COLUMN_POPUP: {
            return {
                ...state,
                ui_column_popup: {
                    shouldShow: false,
                },
            };
        }

        case SHOW_TASK_ASSIGNEE_SCROLLABLE_POPUP:
            return {
                ...state,
                ui_assignee_scroll_popup: {
                    shouldShow: true,
                    anchor: action.anchor,
                    assigneeId: action.assigneeId,
                    project: action.project,
                },
            };

        case HIDE_TASK_ASSIGNEE_SCROLLABLE_POPUP:
            return {
                ...state,
                ui_assignee_scroll_popup: {
                    shouldShow: false,
                },
            };

        case SHOW_PROFILE_SETTINGS:
            return {
                ...state,
                ui_profile_settings: {
                    shouldShow: true,
                },
            };
        case HIDE_PROFILE_SETTINGS:
            return {
                ...state,
                ui_profile_settings: {
                    shouldShow: false,
                },
            };
        case SET_SCROLL_VALUE: {
            return {
                ...state,
                ui_scroll_left: action.value,
            };
        }

        case NAV_LINK_CLICKED: {
            return {
                ...state,
                ui_navlink_selector: {
                    section: action.section,
                    index: action.index,
                },
            };
        }

        case SET_TASK_FILTER: {
            return {
                ...state,
                ui_task_filter_type: action.filterType,
            };
        }

        case SET_QUICK_FILTER: {
            return {
                ...state,
                ui_quick_filter_type: action.filterType,
            };
        }

        case SET_SORTER: {
            return {
                ...state,
                ui_sorter_type: action.sorterType,
            };
        }

        case SHOULD_SHOW_REGISTER: {
            return {
                ...state,
                ui_show_register_account: action.shouldShow,
            };
        }

        default:
            return {
                ...state,
            };
    }
};
