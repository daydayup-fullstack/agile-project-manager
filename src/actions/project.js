// action types
export const CREATE_PROJECT = 'CREATE_PROJECT';

// action creator
export function createProject({ projectName }) {
    return {
        type: CREATE_PROJECT,
        projectName,
    }
}