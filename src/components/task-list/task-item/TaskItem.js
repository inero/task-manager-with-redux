import React from 'react';
import { connect } from 'react-redux';
import { saveTask, completeTask, deleteTask } from '../../../actions/taskActions';

class TaskItem extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            edit: false,
            name: props.task.name
        }
    }   

    componentWillReceiveProps(newProps, oldProps){
        if(newProps.tasks.completed !== oldProps.tasks.completed){
            this.forceUpdate();
        }
    }
    
    onChangeHandler = (e) => {
        this.setState({ [e.target.id]: e.target.value });
    }

    onDoneClick = () => {
        this.props.completeTask(this.props.task.id);
    }

    onEditClick = () => {
        this.setState({edit: !this.state.edit});
    }

    onSaveClick = () => {
        this.props.saveTask(this.state.name, this.props.task.id);
        this.setState({edit: !this.state.edit});
    }

    onDeleteClick = () => {
        this.props.deleteTask(this.props.task.id);
    }

    render(){
        return (
            <li>
                {
                    !this.state.edit ? 
                    <span className={!this.props.task.completed ? 'normal-task' : 'completed-task'}>{this.props.task.name} </span> :
                    <input type="text" id="name" value={this.state.name} name="name" onChange={e => this.onChangeHandler(e)} />
                }
                {
                    !this.props.task.completed ? 
                    <>
                        {   
                            !this.state.edit ? 
                            <>
                                <button type="button" onClick={this.onEditClick}>Edit</button>
                                <button type="button" onClick={this.onDoneClick}>Done</button>
                            </> :
                            <button type="button" onClick={this.onSaveClick}>Save</button> 
                        }
                    </> : 
                    <>
                        <button type="button" onClick={this.onDoneClick}>Undo</button>
                        <button type="button" onClick={this.onDeleteClick}>Delete</button>
                    </>
                }   
            </li>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        saveTask: (taskName, taskId) => dispatch(saveTask(taskName, taskId)),
        completeTask: (taskId) => dispatch(completeTask(taskId)),
        deleteTask: (taskId) => dispatch(deleteTask(taskId))
    }
}

export default connect(null, mapDispatchToProps)(TaskItem);