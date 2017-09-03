import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const LinkButton = props =>
  (<Link className="Button" to={props.action}>{props.text}</Link>);

LinkButton.propTypes = {
  action: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default LinkButton;

