import React from "react";
import TodoItem from "./Todoitem.jsx";
import PropTypes from "prop-types";

class Todos extends React.Component {
  markComplete = () => {
    console.log("Hello World");
  };
  render() {
    return this.props.todos.map((todo) => (
      <TodoItem
        key={todo.id}
        todo={todo}
        markComplete={this.props.markComplete}
        delTodo={this.props.delTodo}
      />
    ));
  }
}

//Proptypes
Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
};

export default Todos;
