import React from "react";
import { useForm } from "../hooks/useForm";

const TodoAdd = ({ handleNewTodo }) => {
  const { onInputChange, onResetForm, description } = useForm({
    description: "",
  });

  const onFormSubmit = (event) => {
    event.preventDefault();
    const newTodo = {
      id: new Date().getTime(),
      description,
      done: false,
    };
    onResetForm();
    handleNewTodo(newTodo);
  };

  return (
    <>
      <h4>Agregar Todo</h4>
      <hr />
      <form onSubmit={onFormSubmit}>
        <input
          type="text"
          placeholder="¿Que hay que hacer?"
          className="form-control"
          name="description"
          value={description}
          onChange={onInputChange}
        />
        <button
          type="submit"
          className="btn btn-primary mt-2"
        >
          Agregar
        </button>
      </form>
    </>
  );
};

export default TodoAdd;
