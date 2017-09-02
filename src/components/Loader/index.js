import React from 'react';
import PropTypes from 'prop-types';

const Loader = props => (
  <div className="Loader">
    <p>{props.title}</p>
  </div>
);

Loader.propTypes = {
  title: PropTypes.string,
};

export default Loader;
