import React from 'react';
import PropTypes from 'prop-types';

import LinkButton from '../LinkButton';
import Button from '../Button';

import * as Styled from './styles';

const Card = props => (
  <Styled.Card removing={props.removing}>
    <div>
      <h2>{props.title}</h2>
      <i>{props.author}</i>
      <p>{props.excerpt}</p>
      <Button onButtonClick={props.onDelete} text="Delete" />
      <LinkButton action={props.id} text="View" />
    </div>
  </Styled.Card>
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
