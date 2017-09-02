import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './styles.css';

const Button = props =>
  (<Link className="Button" to={props.action}>{props.text}</Link>);

Button.propTypes = {
  action: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Button;

