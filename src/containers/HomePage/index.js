import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import { ARTICLES_QUERY } from '../../actions/queries';
import Card from '../../components/Card';
import Loader from '../../components/Loader';
import './styles.css';

const HomePage = ({ data: { loading, error, articles } }) =>
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
              // onDelete={() => onDeleteClick(item.id)}
              key={item.id}
              {...item}
            />))}
        </div>
      }
    </div>
  );

HomePage.propTypes = {
  data: PropTypes.oneOfType([PropTypes.object]),
};

const articlesListQuery = gql`${ARTICLES_QUERY}`;
const ArticlesListWithData = graphql(articlesListQuery)(HomePage);
export default ArticlesListWithData;
