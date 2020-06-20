import backend from "../apis/backend";

export const WORKSPACE_CHANGED = "WORKSPACE_CHANGED";
export const WORKSPACE_CHANGED_FAILED = "WORKSPACE_CHANGED_FAILED";

export const change_workspace = (workspace) => async (dispatch) => {
    try {
        // load all projects under new workspace
        const res = await backend.get(`/workspaces/${workspace.id}`);

        dispatch({
            type: WORKSPACE_CHANGED,
            workspace: res.data.workspace,
            allProjects: res.data.allProjects,
        });
    } catch (e) {
        dispatch({
            type: WORKSPACE_CHANGED_FAILED,
            error: e,
        });
    }
};