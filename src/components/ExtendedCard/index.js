import React from 'react';
import PropTypes from 'prop-types';

const ExtendedCard = props => (
  <div className="Card">
    <div className="Card__wrapper">
      <h2>{props.title}</h2>
      <i>{props.author}</i>
      <p className="Card__wrapper__p">{props.excerpt}</p>
    </div>
  </div>
);

ExtendedCard.propTypes = {
  author: PropTypes.string,
  excerpt: PropTypes.string,
  title: PropTypes.string,
};

export default ExtendedCard;
