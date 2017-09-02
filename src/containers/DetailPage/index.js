import React from 'react';
import PropTypes from 'prop-types';

const DetailPage = props => {

  return (
    <div className="DetailPage">
      <h2>{props.title}</h2>
      <i>{props.author}</i>
      <p>{props.excerpt}</p>
    </div>
  );
};

DetailPage.propTypes = {
  author: PropTypes.string,
  excerpt: PropTypes.string,
  title: PropTypes.string,
};

export default DetailPage;
