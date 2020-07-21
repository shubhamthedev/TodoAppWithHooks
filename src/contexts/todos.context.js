import React, { createContext, useReducer } from "react";
import reducer from "../reducers/todo.reducer";
export const TodosContext = createContext();
const initialTodos = [{ id: 1, task: "Make a todolist app", completed: true }];
export function TodosProvider(props) {
  const [todos, dispatch] = useReducer(reducer, initialTodos);
  return (
    <TodosContext.Provider value={{ todos, dispatch }}>
      {props.children}
    </TodosContext.Provider>
  );
}
