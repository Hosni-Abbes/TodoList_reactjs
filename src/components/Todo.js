import React, {Component, Fragment} from 'react';

import './Todo.css';
class Todo extends Component {
  state = {
    data : ''
  }

  handleChange = (e) => {
    this.setState({
      data: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    if(this.state.data !== '') {
        this.props.addTask(this.state)
        this.setState({data:''})
      }
    }

  render() {

    const {deleteTask, tasks, clearAll} = this.props;
    let length = tasks.length
    const theTask = length ? (tasks.map((task) => {
      return(
        <div key={Math.random()*10} className="tasks">
          <span>{task.data}</span>
          <span onClick={()=> deleteTask(task.data)}>&times;</span>
        </div>
      )
    })) : (<span className="no-task">No Tasks! Please Create One</span>)
    

    return (
      <Fragment>
        <div className="container">
          <form className="upp" onSubmit={this.handleSubmit}>
            <input type="text" onChange={this.handleChange} value={this.state.data}/>
            <input type="submit" value="Add"/>
            <button onClick={() => clearAll()}>Clear</button>
          </form>

          <Fragment>
            {theTask}

          </Fragment>
        </div>
        
      </Fragment>
    )
  }
}
export default Todo