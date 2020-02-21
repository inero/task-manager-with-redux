import React from 'react';
import TaskItem from './task-item/TaskItem';
import { connect } from 'react-redux';
import { loadTask } from '../../actions/taskActions';

class TaskList extends React.Component {

    componentDidMount(){
        this.props.loadTask();
    }

    render(){
        return (
            <ul>
                {
                    this.props.tasks.map((task, index) => <TaskItem task={task} key={index} />)
                }
            </ul>
        )
    }
}

function mapStateToProps(state){
    return {
        tasks: state.tasks
    }
}

function mapDispatchToProps(dispatch){
    return {
        loadTask: () => dispatch(loadTask())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);