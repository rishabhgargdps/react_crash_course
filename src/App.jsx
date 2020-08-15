import React from "react";
import Todos from "./components/Todos.jsx";
import "./App.css";

class App extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: "H1",
        completed: false,
      },
      {
        id: 2,
        title: "H2",
        completed: false,
      },
      {
        id: 3,
        title: "H3",
        completed: false,
      },
    ],
  };
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };
  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos} markComplete={this.markComplete} />
      </div>
    );
  }
}

export default App;