
import request from './request';
import { ARTICLES_QUERY, ARTICLE_QUERY } from './queries';

export const REQUEST_ARTICLES = 'REQUEST_ARTICLES';
export const RECEIVE_ARTICLES = 'RECEIVE_ARTICLES';

export const REQUEST_ARTICLE = 'REQUEST_ARTICLE';
export const RECEIVE_ARTICLE = 'RECEIVE_ARTICLE';

const receiveArticles = json => (
  {
    type: RECEIVE_ARTICLES,
    articles: json.data.articles,
  }
);

export const fetchArticles = () => dispatch => {
  dispatch({ type: REQUEST_ARTICLES });

  request(ARTICLES_QUERY)
    .then(
      response => {
        dispatch(receiveArticles(response));
      },
      error =>
        console.log('An error occured.', error.message),
    );
};

const receiveArticle = json => (
  {
    type: RECEIVE_ARTICLE,
    article: json.data.article,
  }
);

export const fetchArticle = id => dispatch => {
  dispatch({ type: REQUEST_ARTICLE });

  request(ARTICLE_QUERY(id))
    .then(
      response => {
        dispatch(receiveArticle(response));
      },
      error =>
        console.log('An error occured.', error.message),
    );
};
