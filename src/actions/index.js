
import request from './request';
import { ARTICLES_QUERY } from './queries';

export const REQUEST_ARTICLES = 'REQUEST_ARTICLES';
export const RECEIVE_ARTICLES = 'RECEIVE_ARTICLES';

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
      // dispatch({
      //   type: 'REQUEST_ARTICLES_FAILURE',
      //   error: error.message,
      // }),
    );
};

