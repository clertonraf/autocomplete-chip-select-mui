import React from "react";
import TextField from "@material-ui/core/TextField";

const Input = ({ inputParams, label }) => (
  <TextField {...inputParams} variant="outlined" label={label} />
);

export default Input;
