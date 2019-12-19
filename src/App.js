import React, { Component } from 'react';
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'
import './App.css';
import Header from './layout/Header';
import uuid from 'uuid'
class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'Take out trash',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Walk dog',
        completed: false
      },
      {
        id: uuid.v4(),
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

  //add Todo
  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] })
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
        <AddTodo addTodo={this.addTodo} />
        < Todos todos={this.state.todos} markComplete={this.markComplete} deleteTodo={this.deleteTodo} />
      </div>
    );
  }

}

export default App
