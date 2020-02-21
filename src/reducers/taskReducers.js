import { ADD_TASK, EDIT_TASK, COMPLETE_TASK, REMOVE_TASK, LOAD_TASK } from '../utils/taskUtils';

let initialState = { tasks: [{name: 'task1', id: 1, completed: false}, {name: 'task2', id: 2, completed: false}] };

export function actionReducer(state=initialState, action) {
    switch(action.type){
        case ADD_TASK: {
            let newTask = {
                name: action.name,
                id: state.tasks.length,
                completed: false
            }
            return { ...state, tasks: [...state.tasks, newTask] }
        }
        case EDIT_TASK: {
            let task = state.tasks.findIndex(e => e.id===action.taskId);
            let newList = [...state.tasks];
            newList[task].name = action.taskName;
            return { ...state, tasks: newList }
        }
        case COMPLETE_TASK: {
            let task = state.tasks.findIndex(e => e.id===action.taskId);
            let newList = [...state.tasks];
            newList[task].completed = !newList[task].completed;
            return { ...state, tasks: newList }
        }
        case REMOVE_TASK: {
            let task = state.tasks.findIndex(e => e.id===action.taskId);
            let newList = [...state.tasks];
            newList.splice(task, 1);
            return { ...state, tasks: newList }
        }
        case LOAD_TASK: {
            return state;
        }
        default: {
            return state;
        }
    }
}