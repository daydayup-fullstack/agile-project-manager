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
