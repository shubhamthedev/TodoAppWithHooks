import React, { useContext } from "react";
import TextField from "@material-ui/core/TextField";

import useInputState from "./hooks/useInputState";
import { DispatchContext } from "./contexts/todos.context";

export default function EditTodoForm({ id, task, toggleEditForm }) {
  const dispatch = useContext(DispatchContext);
  const [value, handelChange, reset] = useInputState(task);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch({ type: "EDIT", newTask: value, id: id });
        reset();
        toggleEditForm();
      }}
      style={{ marginLeft: "1rem", width: "50%" }}
    >
      <TextField
        margin="normal"
        value={value}
        onChange={handelChange}
        fullWidth
        autoFocus
      />
    </form>
  );
}
