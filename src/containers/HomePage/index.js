import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { connect } from 'react-redux';

import { deleteArticleAction } from '../../actions';

import { ARTICLES_QUERY } from '../../actions/queries';
import Card from '../../components/Card';
import Loader from '../../components/Loader';

export const HomePage = ({ data: { loading, error, articles }, onDeleteClick }) =>
  (
    <div className="HomePage">
      {error &&
        <div>{error.message}</div>
      }
      {loading ?
        <Loader title="Loading data..." /> :
        <div className="HomePage__container">
          {articles.map(item =>
            (<Card
              onDelete={() => onDeleteClick(item.id)}
              key={item.id}
              {...item}
            />))}
        </div>
      }
    </div>
  );

HomePage.propTypes = {
  data: PropTypes.oneOfType([PropTypes.object]),
  onDeleteClick: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  onDeleteClick(id) {
    dispatch(deleteArticleAction(id));
  },
});

const HomePageConnected = connect(null, mapDispatchToProps)(HomePage);

const articlesListQuery = gql`${ARTICLES_QUERY}`;
const ArticlesListWithData = graphql(articlesListQuery)(HomePageConnected);
export default ArticlesListWithData;
