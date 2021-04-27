import React, {Component} from 'react';

import './App.css';
import Todo from './components/Todo';

class App extends Component {

  state = {
    tasks : [
      // {data:''}
    ]
  }

  deleteTask = (data) => {
    let tasks = this.state.tasks
    let i = tasks.findIndex(task => task.data === data)
    tasks.splice(i,1)
    this.setState({tasks})
  }
  // deleteTask = (data) => {   //when same task delete all similar tasks
  //   let tasks = this.state.tasks.filter(task => {
  //     return task.data !== data;
  //   })
  //   this.setState({tasks})
  // }

  clearAll = () => {
    this.setState({tasks:[]})
  }

  addTask = (task) => {
    let tasks = this.state.tasks
    tasks.push(task)
    this.setState({tasks})
  }


  render(){
    return (
      <div className="App">

        <Todo tasks={this.state.tasks} deleteTask={this.deleteTask}  
        clearAll={this.clearAll} addTask={this.addTask} />
        
      </div>
    );
  }
}

export default App;
