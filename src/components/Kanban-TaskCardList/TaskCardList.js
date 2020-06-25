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

    function quickFiltering(tasks) {
        switch (quickFilterType) {
            case QUICK_FILTER.myTasks: {
                return tasks.filter(
                    (task) => task.assignedUserIds.indexOf(user.id) >= 0
                );
            }
            case QUICK_FILTER.thisWeek: {
                //todo - this week
                return tasks;
            }
            case QUICK_FILTER.nextWeek: {
                //todo - next week
                return tasks;
            }
            default: {
                return tasks;
            }
        }
    }

    function sorting(tasks) {
        switch (sorterType) {
            case SORTER.dueDate: {
                //todo - sort by dueDate
                return tasks;
            }

            case SORTER.assignee: {
                // todo - sort by assignees
                return tasks;
            }

            case SORTER.alphabetical: {
                return tasks.sort((a, b) => {
                    const aChar = a.name.charAt(0).toUpperCase();
                    const bChar = b.name.charAt(0).toUpperCase();

                    if (aChar > bChar) {
                        return 1;
                    }
                    if (aChar < bChar) {
                        return -1;
                    }
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
