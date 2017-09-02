import React from 'react';
import PropTypes from 'prop-types';


const Footer = props => (
  <footer>{props.title}</footer>
);

Footer.propTypes = {
  title: PropTypes.string,
};

export default Footer;
