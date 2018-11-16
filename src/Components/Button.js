import React from 'react';
import PT from 'prop-types';

const Button = ({ value }) => {
  return <button>{value}</button>
}

Button.propTypes = {
  value: PT.string.isRequired
}

export default Button