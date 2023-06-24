import React from "react";

const MySelect = (props) => {
  return (
    <select {...props}>
      <option value="">{props.defaultval}</option>
      {props.options.map((option) => (
        <option value={option.href} key={option.id}>
          {option.cat}
        </option>
      ))}
    </select>
  );
};

export default MySelect;
