import backend from "./backend";

export const saveColumnToServer = async (column, project) => {
    try {
        const response = await backend.post(`/columns`, {
            title: column.title,
            id: column.id,
            projectId: project.id,
        });

        console.log(response);
    } catch (e) {
        console.log(e);
    }
};

export const deleteColumnFromServer = async (columnId) => {
    try {
        const response = await backend.delete(`/columns/${columnId}`);
        console.log(response);
    } catch (e) {
        console.log(e);
    }
};

export const updateColumnToServer = async (column) => {
    try {
        const {title, taskIds} = column;
        const response = await backend.put(`/columns/${column.id}`, {
            title,
            taskIds,
        });

        console.log(response);
    } catch (e) {
        console.log(e);
    }
};

export const updateTaskToServer = async (task) => {
    try {
        const {
            name,
            isCompleted,
            description,
            attachments,
            assignedUserIds,
            dueDate,
            likedBy,
            projectIds,
        } = task;
        const response = await backend.put(`/tasks/${task.id}`, {
            name,
            isCompleted,
            description,
            attachments,
            assignedUserIds,
            dueDate,
            likedBy,
            projectIds,
        });

        console.log(response);
    } catch (e) {
        console.log(e);
    }
};

export const saveNewProjectToServer = async (newProject, workspace) => {
    try {
        const {id, colorIndex, iconIndex, columnOrder, name} = newProject;

        const response = await backend.post(`/projects`, {
            id,
            name,
            colorIndex,
            iconIndex,
            columnOrder,
            workspace: workspace.id,
            projectOrder: workspace.projectsInOrder,
        });
        console.log(response);
    } catch (e) {
        console.log(e);
    }
};

export const saveNewTaskToServer = async (newTask) => {
    try {
        // const {} = newTask;
    } catch (e) {
        console.log(e);
    }
};

export const deleteTaskFromServer = async (task) => {
    try {
        const response = await backend.delete(`/tasks/${task.id}`);
        console.log(response);
    } catch (e) {
        console.log(e);
    }
};
