import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';


const Header = props => (
  <h1 className="Header">{props.title}</h1>
);

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
