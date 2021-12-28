import React from "react";
import TextField from "@material-ui/core/TextField";
import { useField } from "formik";

export default function TextField_(props) {
  const [field, meta] = useField(props);
  return (
    <>
      <TextField
        {...field}
        label={props.label}
        type={props.type}
        id={props.id || props.name}
        error={!!meta.error}
        helperText={meta.error || ""}
        fullWidth
        variant="outlined"
      />
    </>
  );
}
