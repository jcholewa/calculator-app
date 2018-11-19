import React from "react";
import PT from "prop-types";

const Button = ({ value, getInput }) => {
  return (
    <button id={value} onClick={getInput}>
      {value}
    </button>
  );
};

Button.propTypes = {
  value: PT.string.isRequired
};

export default Button;
