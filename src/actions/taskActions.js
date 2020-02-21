import { ADD_TASK, EDIT_TASK, LOAD_TASK, COMPLETE_TASK, REMOVE_TASK } from '../utils/taskUtils';

export const loadTask = () => ({
    type: LOAD_TASK
});

export const createTask = (task) => ({
    type: ADD_TASK,
    task
});

export const saveTask = (taskName, taskId) => ({
    type: EDIT_TASK,
    taskName, taskId
});

export const completeTask = (taskId) => ({
    type: COMPLETE_TASK,
    taskId
});

export const deleteTask = (taskId) => ({
    type: REMOVE_TASK,
    taskId
});

