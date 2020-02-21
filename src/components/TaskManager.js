import React from 'react';
import TaskForm from './task-form/TaskForm';
import TaskList from './task-list/TaskList';

class TaskManager extends React.Component {

    onAddClick = (taskName) => {
        let newTask = {
            name: taskName,
            id: this.state.tasks.length + 1,
            completed: false
        }
        this.setState({ tasks: [...this.state.tasks, newTask] });
    }

    onSaveClick = (taskName, taskId) => {
        let task = this.state.tasks.findIndex(e => e.id===taskId);
        let newList = [...this.state.tasks];
        newList[task].name = taskName;
        this.setState({ tasks: newList });
    }

    onDoneClick = (taskId) => {
        let task = this.state.tasks.findIndex(e => e.id===taskId);
        let newList = [...this.state.tasks];
        newList[task].completed = !newList[task].completed;
        this.setState({ tasks: newList });
    }

    onRemoveTask = (taskId) => {
        let task = this.state.tasks.findIndex(e => e.id===taskId);
        let newList = [...this.state.tasks];
        newList.splice(task, 1);
        this.setState({ tasks: newList });
    }

    render(){
        return (
            <>
                <TaskForm />
                <TaskList completeTask={this.onDoneClick} removeTask={this.onRemoveTask} saveTask={this.onSaveClick} />
            </>
        )
    }
}

export default TaskManager;