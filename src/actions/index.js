
import request from './request';
import {
  ARTICLES_QUERY,
  ARTICLE_QUERY,
  DELETE_ARTICLE_QUERY,
  UPDATE_ARTICLE_QUERY,
} from './queries';

export const REQUEST_ARTICLES = 'REQUEST_ARTICLES';
export const RECEIVE_ARTICLES = 'RECEIVE_ARTICLES';

export const REQUEST_ARTICLE = 'REQUEST_ARTICLE';
export const RECEIVE_ARTICLE = 'RECEIVE_ARTICLE';

export const REMOVED_ARTICLE = 'REMOVED_ARTICLE';

export const UPDATED_ARTICLE = 'UPDATED_ARTICLE';

export const POST_UPDATED_ARTICLE = 'POST_UPDATED_ARTICLE';

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

const removeArticle = json => (
  {
    type: REMOVED_ARTICLE,
    article: json.data.deleteArticle,
  }
);

export const deleteArticle = id => dispatch => {
  request(DELETE_ARTICLE_QUERY(id))
    .then(
    response => {
      dispatch(removeArticle(response));
    },
    error =>
      console.log('An error occured.', error.message),
  );
};

const updatedArticle = json => (
  {
    type: UPDATED_ARTICLE,
    article: json.data.updateArticle,
  }
);

export const updateArticle = (id, title) => dispatch => {
  request(UPDATE_ARTICLE_QUERY(id, title))
    .then(
    response => {
      dispatch(updatedArticle(response));
    },
    error =>
      console.log('An error occured.', error.message),
  );
};

export const postUpdatedArticle = () => dispatch =>

  dispatch({
    type: POST_UPDATED_ARTICLE,

  });

