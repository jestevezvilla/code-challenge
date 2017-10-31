import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const LinkButton = props =>
  (<Link href="#default" className={`Button ${props.buttonClass}`} to={props.action}>{props.text}</Link>);

LinkButton.propTypes = {
  action: PropTypes.string.isRequired,
  buttonClass: PropTypes.string,
  text: PropTypes.string.isRequired,
};

export default LinkButton;

