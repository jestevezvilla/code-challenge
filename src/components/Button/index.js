import React from 'react';
import PropTypes from 'prop-types';

const Button = props =>
  (<a href="#default" className="Button" onClick={props.onButtonClick}>{props.text}</a>);

Button.propTypes = {
  onButtonClick: PropTypes.func,
  text: PropTypes.string.isRequired,
};

export default Button;

