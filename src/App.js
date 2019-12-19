import React, { Component } from 'react';
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'
import './App.css';
import Header from './layout/Header';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out trash',
        completed: false
      },
      {
        id: 2,
        title: 'Walk dog',
        completed: false
      },
      {
        id: 3,
        title: 'Pet dog',
        completed: false
      },
    ]
  }

  // toggle complete
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    })
  }

  // Delete Todo
  deleteTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter(todos => todos.id !== id)]
    })
  }
  render() {
    console.log(this.state.todos)
    return (

      <div className="App" >
        <Header />
        <AddTodo />
        < Todos todos={this.state.todos} markComplete={this.markComplete} deleteTodo={this.deleteTodo} />
      </div>
    );
  }

}

export default App
