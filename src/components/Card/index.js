import React from 'react';
import PropTypes from 'prop-types';

import LinkButton from '../LinkButton';
import Button from '../Button';

import './styles.css';

const Card = props => (
  <div className="Card">
    <div className="Card__wrapper">
      <h2 className="Card__wrapper__title">{props.title}</h2>
      <i>{props.author}</i>
      <p className="Card__wrapper__p">{props.excerpt}</p>
      <Button onButtonClick={props.onDelete} text="Delete" />
      <LinkButton action={props.id} text="View" />
    </div>
  </div>
);

Card.propTypes = {
  author: PropTypes.string,
  excerpt: PropTypes.string,
  id: PropTypes.string,
  onDelete: PropTypes.func,
  title: PropTypes.string,
};

export default Card;
