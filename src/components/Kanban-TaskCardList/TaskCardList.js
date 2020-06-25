import {Droppable} from "react-beautiful-dnd";
import React from "react";
import "./TaskCardList.css";
import TaskCard from "../Kanban-TaskCard/TaskCard";
import {connect} from "react-redux";
import {QUICK_FILTER, SORTER, TASK_FILTER} from "../../actions";

const TaskCardList = ({
                          tasks,
                          columnId,
                          sorterType,
                          taskFilterType,
                          quickFilterType,
                          user,
                      }) => {
    function taskFiltering(tasks) {
        switch (taskFilterType) {
            case TASK_FILTER.completed: {
                return tasks.filter((task) => task.isCompleted);
            }
            case TASK_FILTER.incomplete: {
                return tasks.filter((task) => !task.isCompleted);
            }
            default: {
                return tasks;
            }
        }
    }

    // out data's date is not millisecond but in seconds, hence the 1000
    const isWithInThisWeek = (date) => {
        if (!date) return false;

        const today = new Date();
        const firstDay = Math.floor(
            new Date(today.setDate(today.getDate() - today.getDay())).getTime() / 1000
        );
        const lastDay = Math.floor(
            new Date(today.setDate(today.getDate() - today.getDay() + 6)).getTime() /
            1000
        );

        // console.log(`DueDate: ${date}`);
        // console.log(`Today: ${today}`);
        // console.log(`First day next week: ${firstDay}`);
        // console.log(`Last day next week: ${lastDay}`);

        return date >= firstDay && date <= lastDay;
    };

    const isWithInNextWeek = (date) => {
        if (!date) return false;

        const today = new Date();
        const firstDay = Math.floor(
            new Date(today.setDate(today.getDate() - today.getDay() + 6)).getTime() /
            1000
        );
        const lastDay = Math.floor(
            new Date(today.setDate(today.getDate() - today.getDay() + 13)).getTime() /
            1000
        );

        // console.log(`DueDate: ${date}`);
        // console.log(`Today: ${today}`);
        // console.log(`First day next week: ${firstDay}`);
        // console.log(`Last day next week: ${lastDay}`);
        return date >= firstDay && date <= lastDay;
    };

    function quickFiltering(tasks) {
        switch (quickFilterType) {
            case QUICK_FILTER.myTasks: {
                return tasks.filter((task) => {
                    if (task.assignedUserIds.length > 0) {
                        return task.assignedUserIds[0].id === user.id;
                    }
                });
            }
            case QUICK_FILTER.thisWeek: {
                return tasks.filter((task) => isWithInThisWeek(task.dueDate));
            }
            case QUICK_FILTER.nextWeek: {
                return tasks.filter((task) => isWithInNextWeek(task.dueDate));
            }
            default: {
                return tasks;
            }
        }
    }

    function sorting(tasks) {
        switch (sorterType) {
            case SORTER.dueDate: {
                return tasks.sort((task1, task2) => {
                    const x = task1.dueDate;
                    const y = task2.dueDate;

                    if (x > y) return 1;
                    if (x < y) return -1;
                    return 0;
                });
            }

            case SORTER.assignee: {
                return tasks.sort((task1, task2) => {
                    const x = task1.assignedUserIds.length;
                    const y = task2.assignedUserIds.length;

                    if (x > y) return -1;
                    if (x < y) return 1;
                    return 0;
                });
            }

            case SORTER.alphabetical: {
                return tasks.sort((a, b) => {
                    const aChar = a.name.charAt(0).toUpperCase();
                    const bChar = b.name.charAt(0).toUpperCase();

                    if (aChar > bChar) return 1;
                    if (aChar < bChar) return -1;
                    return 0;
                });
            }
            default: {
                return tasks;
            }
        }
    }

    function renderTasks() {
        let result;
        result = taskFiltering(tasks);
        result = quickFiltering(result);
        result = sorting(result);

        return result.map((task, index) => (
            <TaskCard task={task} index={index} key={task.id} columnId={columnId}/>
        ));
    }

    return (
        <Droppable droppableId={columnId} type={"task"}>
            {(provided) => (
                <div
                    className={`taskCardList ${tasks.length === 0 && "empty"}`}
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                >
                    {renderTasks()}
                    {provided.placeholder}
                </div>
            )}
        </Droppable>
    );
};

const mapStateToProps = (state) => {
    return {
        taskFilterType: state.app.ui_task_filter_type,
        quickFilterType: state.app.ui_quick_filter_type,
        sorterType: state.app.ui_sorter_type,
        user: state.user,
    };
};

export default connect(mapStateToProps, {})(TaskCardList);
