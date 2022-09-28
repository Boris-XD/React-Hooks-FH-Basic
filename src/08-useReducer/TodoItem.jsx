import React from "react";

const TodoItem = ({ todo, handleRemoveTodo, onToggleTodo }) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span className={`align-self-center ${todo.done && 'text-decoration-line-through'}`}
      onClick={ () => onToggleTodo(todo.id) }
      >{todo.description}</span>
      <button
        onClick={() => {
          handleRemoveTodo(todo.id);
        }}
        className="btn btn-danger"
      >
        Borar
      </button>
    </li>
  );
};

export default TodoItem;
