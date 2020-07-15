import React from "react";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";

import useInputState from "./hooks/useInputState";

export default function TodoForm({ addTodo }) {
  const [value, handleChange, reset] = useInputState("");
  return (
    <Paper style={{ margin: "1rem 0", padding: "1rem", fontSize: "2rem" }}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTodo(value);
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
