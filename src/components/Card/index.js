import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import LinkButton from '../LinkButton';
import Button from '../Button';

const Card = ({ className, ...props }) => (
  <div className={className}>
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
  className: PropTypes.string,
  excerpt: PropTypes.string,
  id: PropTypes.string,
  onDelete: PropTypes.func,
  removing: PropTypes.bool,
  title: PropTypes.string,
};

const StyledCard = styled(Card)`
  box-sizing: border-box;
  color: palevioletred;
  display: inline-block;
  font-weight: bold;
  opacity: ${props => (props.removing ? 0.01 : 1)};
  padding: 0 1em 1em 1em;
  transition: opacity 300ms ease-in;
  vertical-align: top;
  width: 33%;
`;

export default StyledCard;
