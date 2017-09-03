import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const getTags = tags =>
  (<div className="CardExtended__wrapper__tags">
    {tags.map(tag => <span className="CardExtended__wrapper__tags__tag" key={tag}>{tag}</span>)}
  </div>);

const ExtendedCard = props => (
  <div className="CardExtended">
    <div className="CardExtended__wrapper">
      <h2>
        {props.published ?
          <span className="CardExtended__wrapper__badge">Published</span> : ''}
        <span>{props.title}</span>
      </h2>
      {props.tags && getTags(props.tags)}
      <i>{props.author}</i>
      <p className="CardExtended__wrapper__p">{props.content}</p>
    </div>
  </div>
);

ExtendedCard.propTypes = {
  author: PropTypes.string,
  content: PropTypes.string,
  published: PropTypes.bool,
  tags: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string,
};

export default ExtendedCard;
