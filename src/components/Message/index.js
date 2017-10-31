import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const Message = props => (
  <div className="Message">
    <span>{props.text}</span>
  </div>);


Message.propTypes = {
  text: PropTypes.string,
};

export default Message;
