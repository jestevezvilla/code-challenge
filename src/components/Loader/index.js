import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const Loader = props => (
  <div className="Loader">
    <span>{props.title}</span>
  </div>
);

Loader.propTypes = {
  title: PropTypes.string,
};

export default Loader;
