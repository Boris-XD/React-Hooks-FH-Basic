import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos,  handleRemoveTodo, onToggleTodo }) => {
  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <TodoItem todo={todo} key={todo.id} handleRemoveTodo={handleRemoveTodo} onToggleTodo={onToggleTodo} />
      ))}
    </ul>
  );
};

export default TodoList;
