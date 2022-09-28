import React from "react";
import { useTodos } from "../hooks/useTodos";
import TodoAdd from "./TodoAdd";
import TodoList from "./TodoList";

const TodoApp = () => {
  const { todos, todosCount, pendingTodosCount, handleNewTodo, handleRemoveTodo, handleToggleTodo } = useTodos();
  return (
    <>
      <h1>
        Todo App: ({todosCount()}) <small>Pendientes: {pendingTodosCount()}</small>
      </h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            handleRemoveTodo={handleRemoveTodo}
            onToggleTodo={handleToggleTodo}
          />
        </div>
        <div className="col-5">
          <TodoAdd handleNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  );
};

export default TodoApp;
