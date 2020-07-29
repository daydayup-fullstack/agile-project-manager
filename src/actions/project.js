import backend from "../apis/backend";

export const PROJECT_SELECTED_REQUESTED = "PROJECT_SELECTED_REQUESTED";
export const PROJECT_SELECTED_SUCCESS = "PROJECT_SELECTED_SUCCESS";
const project_selected_success = (project, response) => {
    return {
        type: PROJECT_SELECTED_SUCCESS,
        project,
        columns: {
            ...project.columns,
            ...response.data.columns,
        },
        tasks: {
            ...project.tasks,
            ...response.data.tasks,
        },
    };
};

export const PROJECT_SELECTED_FAILED = "PROJECT_SELECTED_FAILED";
const project_selected_failed = (error) => {
    return {
        type: PROJECT_SELECTED_FAILED,
        error: error,
    };
};

export const project_selected = (project) => async (dispatch) => {
    try {
        dispatch({
            type: PROJECT_SELECTED_REQUESTED,
        });
        const response = await backend.get(`/projects/${project.id}`);
        dispatch(project_selected_success(project, response));
    } catch (e) {
        dispatch(project_selected_failed(e));
    }
};

export const PROJECT_CHANGED = "PROJECT_CHANGED";
export const project_changed = (project) => async (dispatch) => {
    try {
        dispatch(project_changed_in_store(project));
        const { name, colorIndex, iconIndex, columnOrder, activeUsers } = project;

        const response = await backend.put(`/projects/${project.id}`, {
            name,
            colorIndex,
            iconIndex,
            columnOrder,
            activeUsers,
        });

        console.log(response);

        dispatch(project_changed_success());
    } catch (error) {
        dispatch(project_changed_failed(error));
    }
};

export const PROJECT_CHANGED_SUCCESS = "PROJECT_CHANGED_SUCCESS";
export const project_changed_success = () => {
    return {
        type: PROJECT_CHANGED_SUCCESS,
    };
};

export const project_changed_in_store = (project) => {
    return {
        type: PROJECT_CHANGED,
        project,
    };
};

export const PROJECT_CHANGED_FAILED = "PROJECT_CHANGED_FAILED";
export const project_changed_failed = (error) => {
    // todo - should activate sync failed warning in ui
    return {
        type: PROJECT_CHANGED_SUCCESS,
        error,
    };
};

export const PROJECT_ADDED = "PROJECT_ADDED";
export const project_added = (project) => async (dispatch) => {
    try {
        dispatch(project_added_in_store(project));
        // const {name, colorIndex, iconIndex, columnOrder, activeUsers} = project;
        //
        // const response = await backend.post("/projects", {
        //     name,
        //     colorIndex,
        //     iconIndex,
        //     columnOrder,
        //     activeUsers,
        // });
        //
        // console.log(response);
        //
        // dispatch(project_changed_success());
    } catch (error) {
        dispatch(project_changed_failed(error));
    }
};

export const PROJECT_ADDED_SUCCESS = "PROJECT_ADDED_SUCCESS";
export const project_added_success = () => {
    return {
        type: PROJECT_ADDED_SUCCESS,
    };
};

export const project_added_in_store = (project) => {
    return {
        type: PROJECT_ADDED,
        project,
    };
};

export const PROJECT_ADDED_FAILED = "PROJECT_ADDED_FAILED";
export const project_added_failed = (error) => {
    // todo - should activate sync failed warning in ui
    return {
        type: PROJECT_ADDED_SUCCESS,
        error,
    };
};

export const PROJECT_DELETED = "PROJECT_DELETED";
export const delete_project = ({ project, currentWorkspace }) => async (
    dispatch
) => {
    try {
        const workspace = currentWorkspace;
        dispatch(project_delete_in_store(project));

        const response = await backend.delete(`/workspaces/${workspace.id}/projects/${project.id}`);
        console.log(response);
        dispatch(project_deleted_success());
    } catch (error) {
        dispatch(project_deleted_failed(error));
    }
};

export const PROJECT_DELETED_SUCCESS = "PROJECT_DELETED_SUCCESS";
export const project_deleted_success = () => {
    return {
        type: PROJECT_DELETED_SUCCESS,
    };
};

export const PROJECT_DELETED_FAILED = "PROJECT_DELETED_FAILED";
export const project_deleted_failed = (error) => {
    return {
        type: PROJECT_DELETED_FAILED,
        error,
    };
};

export const project_delete_in_store = (project) => {
    return {
        type: PROJECT_DELETED,
        project,
    };
};

export const PROJECT_STAR_ADDED = " PROJECT_STAR_ADDED";
export const add_project_star = (project) => {
    return {
        type: PROJECT_STAR_ADDED,
        project,
    };
};

export const PROJECT_STAR_REMOVED = " PROJECT_STAR_REMOVED";
export const remove_project_star = (project) => {
    return {
        type: PROJECT_STAR_REMOVED,
        project,
    };
};

export const FETCH_PROJECT = "FETCH_PROJECT"
export const fetchProject = (id) => async dispatch =>{
    const response = await backend.get(`/projects/${id}`);
    console.log("response", response)
    dispatch({
        type: FETCH_PROJECT,
        payload:response.data,
    })
}