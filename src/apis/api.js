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
