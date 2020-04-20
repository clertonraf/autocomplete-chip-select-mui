/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import Chip from "@material-ui/core/Chip";

const Tags = ({ values, getTagProps }) =>
  values.map((option, index) => (
    <Chip variant="outlined" label={option} {...getTagProps({ index })} />
  ));

export default Tags;
