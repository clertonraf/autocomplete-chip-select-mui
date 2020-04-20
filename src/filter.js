import { createFilterOptions } from "@material-ui/lab/Autocomplete";

const filterOptions = createFilterOptions();

export const filterInput = (options, params, word) => {
  const filtered = filterOptions(options, params);
  if (params.inputValue !== "") {
    filtered.push({
      inputValue: params.inputValue,
      word
    });
  }
  return filtered;
};

export const filterNewValue = (newValue, options) => {
  let suggestion =
    Array.isArray(newValue) &&
    newValue.find(x => Object.prototype.hasOwnProperty.call(x, "inputValue"));
  const fromKeyboard =
    Array.isArray(newValue) && newValue?.find(x => !options.includes(x));
  if (!suggestion && fromKeyboard) {
    suggestion = { inputValue: fromKeyboard };
  }
  const currentValues =
    Array.isArray(newValue) &&
    newValue.filter(
      x =>
        !Object.prototype.hasOwnProperty.call(x, "inputValue") &&
        x !== fromKeyboard
    );
  return [suggestion, currentValues];
};
