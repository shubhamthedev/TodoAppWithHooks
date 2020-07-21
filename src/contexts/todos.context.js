import React, { createContext } from "react";
import reducer from "../reducers/todo.reducer";
import useLocalStorageReducer from "../hooks/useLocalStorageReducer";
export const TodosContext = createContext();
export const DispatchContext = createContext();
const initialTodos = [{ id: 1, task: "Make a todolist app", completed: true }];
export function TodosProvider(props) {
  const [todos, dispatch] = useLocalStorageReducer(
    "todos",
    initialTodos,
    reducer
  );
  return (
    <TodosContext.Provider value={todos}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </TodosContext.Provider>
  );
}
