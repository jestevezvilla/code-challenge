import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const Footer = props => (
  <footer className="Footer">{props.title}</footer>
);

Footer.propTypes = {
  title: PropTypes.string,
};

export default Footer;
