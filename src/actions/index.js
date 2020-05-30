export const selectProject = (projectId) => {
    return {
        type: "SELECT_PROJECT",
        payload: projectId
    }
}