import React, { useContext } from "react";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import { DispatchContext } from "./contexts/todos.context";

import useInputState from "./hooks/useInputState";

export default function TodoForm() {
  const [value, handleChange, reset] = useInputState("");
  const dispatch = useContext(DispatchContext);
  return (
    <Paper style={{ margin: "1rem 0", padding: "1rem", fontSize: "2rem" }}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({ type: "ADD", task: value });
          reset();
        }}
      >
        <TextField
          margin="normal"
          value={value}
          onChange={handleChange}
          label="Add a New Todo"
          fullWidth
        />
      </form>
    </Paper>
  );
}
