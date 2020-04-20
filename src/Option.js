import React from "react";
import parse from "autosuggest-highlight/parse";
import match from "autosuggest-highlight/match";

const Option = ({ option, value }) => {
  const matches = match(option, value);
  const parts = parse(option, matches);
  return (
    <div>
      {parts.map((part, index) => (
        <span key={index} style={{ fontWeight: part.highlight ? 700 : 400 }}>
          {part.text.word || part.text}
        </span>
      ))}
    </div>
  );
};

export default Option;
