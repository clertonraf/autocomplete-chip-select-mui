import React from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Option from "./Option";
import Tags from "./Tags";
import Input from "./Input";
import { filterInput, filterNewValue } from "./filter";

const AutocompleteChipSelect = ({
  value,
  onChange,
  options,
  label,
  multiple,
  addOptionLabel
}) => {
  const [componentValue, setComponentValue] = React.useState(value);
  const [componentOptions, setComponentOptions] = React.useState([]);
  return (
    <Autocomplete
      value={componentValue}
      multiple={multiple}
      clearText="Löschen"
      id="tags-filled"
      options={[...options, ...componentOptions]}
      freeSolo
      filterOptions={(opt, params) =>
        filterInput(opt, params, `${addOptionLabel}"${params.inputValue}"`)
      }
      onChange={(_, newValue) => {
        const [suggestion, currentValues] = filterNewValue(newValue, [
          ...options,
          ...componentOptions
        ]);
        if (suggestion) {
          setComponentValue([...currentValues, suggestion.inputValue]);
          setComponentOptions([...componentOptions, suggestion.inputValue]);
          if (onChange) onChange([...currentValues, suggestion.inputValue]);
        } else {
          setComponentValue(
            newValue?.hasOwnProperty("inputValue")
              ? newValue.inputValue
              : newValue
          );
          setComponentOptions(
            newValue?.hasOwnProperty("inputValue")
              ? [...componentOptions, newValue.inputValue]
              : componentOptions.filter(x => newValue?.includes(x))
          );
          if (onChange)
            onChange(
              newValue?.hasOwnProperty("inputValue")
                ? newValue.inputValue
                : newValue
            );
        }
      }}
      renderOption={(option, { inputValue }) => (
        <Option option={option} value={inputValue} />
      )}
      renderTags={(v, getTagProps) => (
        <Tags values={v} getTagProps={getTagProps} />
      )}
      renderInput={params => <Input inputParams={params} label={label} />}
    />
  );
};

export default AutocompleteChipSelect;
