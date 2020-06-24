import {
    deleteTaskFromServer,
    updateColumnToServer,
    updateTaskToServer,
} from "../../apis/api";
import {generateId} from "../../model/utility";
import React from "react";

const TaskcardContextPopup = ({taskcard_context_menu, project_changed}) => {
    const task = taskcard_context_menu.task;
    const columnId = taskcard_context_menu.columnId;
    const project = taskcard_context_menu.project;

    function markComplete() {
        const updatedTask = {
            ...project.tasks[task.id],
            isCompleted: !task.isCompleted,
        };

        const updatedProject = {
            ...project,
            tasks: {
                ...project.tasks,
                [task.id]: updatedTask,
            },
        };

        project_changed(updatedProject);
        updateTaskToServer(updatedTask);
    }

    function duplicateTask() {
        const id = generateId();
        const index = project.columns[columnId].taskIds.indexOf(task.id);
        const newTask = {...task, id: id, createdOn: new Date().getTime()};
        const newTaskIds = [...project.columns[columnId].taskIds];
        newTaskIds.splice(index, 0, id);

        const newColumn = {
            ...project.columns[columnId],
            taskIds: newTaskIds,
        };

        const updatedProject = {
            ...project,
            tasks: {
                ...project.tasks,
                [id]: newTask,
            },
            columns: {
                ...project.columns,
                [columnId]: newColumn,
            },
        };

        project_changed(updatedProject);
        updateColumnToServer(newColumn);
    }

    function copyTaskName() {
        const el = document.createElement("textarea");
        el.value = task.name;
        el.setAttribute("readonly", "");
        el.style = {position: "absolute", left: "-9999px"};
        document.body.appendChild(el);
        el.select();
        document.execCommand("copy");
        document.body.removeChild(el);
    }

    function deleteTask() {
        const taskIds = project.columns[columnId].taskIds;
        const index = taskIds.indexOf(task.id);
        const newTaskIds = [...taskIds];
        newTaskIds.splice(index, 1);

        const updatedColumn = {
            ...project.columns[columnId],
            taskIds: newTaskIds,
        };

        const updatedProject = {
            ...project,
            columns: {
                ...project.columns,
                [columnId]: updatedColumn,
            },
        };

        project_changed(updatedProject);
        updateColumnToServer(updatedColumn);
        deleteTaskFromServer(task);
    }

    return (
        <div className="TaskcardContextPopup">
            <ul className={"TaskcardContextPopup__actions"}>
                <li onClick={() => markComplete()}>
                    <span className={"material-icons-outlined icon"}>check_circle</span>
                    <span>Mark {!task.isCompleted ? "Completed" : "Incompleted"}</span>
                </li>

                <li onClick={() => duplicateTask()}>
                    <span className={"material-icons-outlined icon"}>file_copy</span>
                    <span>Duplicate task</span>
                </li>
            </ul>
            <ul>
                <li onClick={() => copyTaskName()}>
                    <span>Copy task name</span>
                </li>
            </ul>

            <ul>
                <li onClick={() => deleteTask()}>
                    <span>Delete task</span>
                </li>
            </ul>
        </div>
    );
};

export default TaskcardContextPopup;
