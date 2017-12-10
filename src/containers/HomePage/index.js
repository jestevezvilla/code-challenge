import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import { branch, renderComponent, withProps } from 'recompose';


import { ARTICLES_QUERY } from '../../actions/queries';
import Card from '../../components/Card';
import Loader from '../../components/Loader';


const enhanceLoader = withProps({ title: 'Loading' });
const LoaderWithTitle = enhanceLoader(Loader);

const whileLoading = loading =>
  branch(
    loading,
    renderComponent(LoaderWithTitle),
  );


const enhanceHomePage = whileLoading(props => props.data.loading);

const HomePage = ({ data: { error, articles } }) =>
  (
    <div className="HomePage">
      {error &&
        <div>{error.message}</div>
      }
      <div className="HomePage__container">
        {articles.map(item =>
          (<Card
            key={item.id}
            {...item}
          />))}
      </div>
    </div>
  );

const HomePageWithLoader = enhanceHomePage(HomePage);

HomePage.propTypes = {
  data: PropTypes.oneOfType([PropTypes.object]),
};

const articlesListQuery = gql`${ARTICLES_QUERY}`;
const ArticlesListWithData = graphql(articlesListQuery)(HomePageWithLoader);
export default ArticlesListWithData;
