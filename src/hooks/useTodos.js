import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const useTodos = (initialState = []) => {
  const [todos, dispatch] = useReducer(todoReducer, initialState, init);

  const handleNewTodo = (todo) => {
    const action = {
      type: "[TODO]: Add todo",
      payload: todo,
    };

    dispatch(action);
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleRemoveTodo = (id) => {
    dispatch({
      type: "[TODO]: Remove todo",
      payload: id,
    });
  };

  const handleToggleTodo = (id) => {
    dispatch({
      type: "[TODO]: Toggle Todo",
      payload: id,
    });
  };

  const todosCount = () => {
    return todos.length;
  };

  const pendingTodosCount = () => {
    return todos.filter((todo) => !todo.done).length;
  };

  return {
    todos,
    todosCount,
    pendingTodosCount,
    handleNewTodo,
    handleRemoveTodo,
    handleToggleTodo,
  };
};
