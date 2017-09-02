import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Card = props => (
  <div className="DetailPage">
    <h2>{props.title}</h2>
    <i>{props.author}</i>
    <p>{props.excerpt}</p>
    <Link to={props.id}>Details</Link>
  </div>
);

Card.propTypes = {
  author: PropTypes.string,
  excerpt: PropTypes.string,
  id: PropTypes.string,
  title: PropTypes.string,
};

export default Card;
