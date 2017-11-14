import React from 'react';
import PropTypes from 'prop-types';

import LinkButton from '../LinkButton';
import Button from '../Button';

import './Card.css';

const Card = props => (
  <div className={`Card ${props.removing ? 'animation-leave-active' : ''}`}>
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
  removing: PropTypes.bool,
  title: PropTypes.string,
};

export default Card;
