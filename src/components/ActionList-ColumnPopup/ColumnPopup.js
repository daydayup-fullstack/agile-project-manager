import {deleteColumnFromServer} from "../../apis/api";
import React from "react";

const ColumnPopup = ({project, project_changed, column_popup}) => {
    // todo - fix the dispositioning effect bug after horizontal scroll

    const updateProject = (columnId) => {
        const updatedProject = {
            ...project,
            columnOrder: project.columnOrder.filter((id) => id !== columnId),
        };

        delete updatedProject.columns[columnId];

        column_popup.column.taskIds.map((taskId) => {
            delete updatedProject.tasks[taskId];
            return null;
        });

        project_changed(updatedProject);
        deleteColumnFromServer(columnId);
    };

    function deleteColumn() {
        const columnId = column_popup.column.id;

        if (project.columns[columnId].taskIds.length > 0) {
            const goAhead = window.confirm(
                "This column contains other tasks, Do you really want to delete it?"
            );
            if (goAhead) updateProject(columnId);
            return;
        }

        updateProject(columnId);
    }

    return (
        <ul className={"ColumnPopup"}>
            <li onClick={deleteColumn}>Delete column</li>
        </ul>
    );
};
export default ColumnPopup;
