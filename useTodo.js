import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

const initialState = [];
const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const useTodo = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (newTodo) => {
    //console.log(newTodo);
    const action = {
      type: "ADD TODO",
      payload: newTodo,
    };
    dispatch(action);
  };

  const handleDeleteTodo = (id) => {
    //console.log("Origen Borrar este id : " + id);
    const action = {
      type: "DELETE TODO",
      payload: id,
    };
    dispatch(action);
  };

  const handleToggleTodo = (id) => {
    //console.log("Origen Toggle este id : " + id);
    dispatch({
      type: "TOGGLE TODO",
      payload: id,
    });
  };

  const todosCount = todos.length;
  const pendingTodosCount = todos.filter((todo) => !todo.donde).length;

  return {
    todos,
    todosCount,
    pendingTodosCount,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
  };
};
