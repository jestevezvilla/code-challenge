import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';

import './styles.css';

const Card = props => (
  <div className="Card">
    <div className="Card__wrapper">
      <h2>{props.title}</h2>
      <i>{props.author}</i>
      <p className="Card__wrapper__p">{props.excerpt}</p>
      <Button action={props.id} text="Details" />
    </div>
  </div>
);

Card.propTypes = {
  author: PropTypes.string,
  excerpt: PropTypes.string,
  id: PropTypes.string,
  title: PropTypes.string,
};

export default Card;
