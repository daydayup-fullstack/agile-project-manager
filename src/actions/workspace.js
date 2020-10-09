import backend from "../apis/backend";
import {createNewSharedWorkspace, getUserWorkspaces} from "../apis/api";

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


export const ADDING_MEMBERS = "ADDING_MEMBERS";
export const ADDING_MEMBERS_FAILED = "ADDING_MEMBERS_FAILED";

export const adding_members_to_workspace = ({workspaceId, emails}) => async (dispatch) => {
    try {
        const res = await backend.put(`/workspaces/${workspaceId}/members`, {
            workspaceId,
            emails
        });

        console.log(res.data.allMembers);

        dispatch({
            type: ADDING_MEMBERS,
            allMembers: res.data.allMembers
        })

    } catch (e) {
        dispatch({
            type: ADDING_MEMBERS_FAILED,
            error: e
        })
    }
}


export const CREATE_NEW_SHARED_WORKSPACE = "CREATE_NEW_SHARED_WORKSPACE";
export const CREATE_NEW_SHARED_WORKSPACE_FAILED = "CREATE_NEW_SHARED_WORKSPACE_FAILED";

export const create_new_shared_workspace = (userId, {workspaceName, emails}) => async (dispatch) => {
    try {
        const res = await createNewSharedWorkspace(userId, {workspaceName, emails});
        const workspacesRes = await getUserWorkspaces(userId);

        dispatch({
            type: CREATE_NEW_SHARED_WORKSPACE,
            workspaces: workspacesRes.data.workspaces,
            allWorkspaces: workspacesRes.data.allWorkspaces
        })


    } catch (e) {
        dispatch({
            type: CREATE_NEW_SHARED_WORKSPACE_FAILED,
            error: e
        })
    }
}
