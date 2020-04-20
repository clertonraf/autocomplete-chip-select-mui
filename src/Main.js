/* eslint-disable no-use-before-define */
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import data from "./data.json";
import AutocompleteChipSelect from "./AutocompleteChipSelect";

const useStyles = makeStyles(() => ({
  root: {
    "& > * + *": {
      marginTop: 16
    }
  }
}));

export default () => {
  const classes = useStyles();
  const [value, setValue] = React.useState([data[0].title]);
  const itemList = data.map(option => option.title);
  return (
    <div className={classes.root}>
      <AutocompleteChipSelect
        value={value}
        options={itemList}
        label="Film"
        addOptionLabel="Hinzufügen: "
        onChange={value => setValue(value)}
      />
    </div>
  );
};
