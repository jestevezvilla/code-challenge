
import request from '../actions/request';
import { ARTICLES_QUERY, ARTICLE_QUERY, UPDATE_ARTICLE_QUERY, DELETE_ARTICLE_QUERY } from '../actions/queries';

export const fetchArticles = () =>
  request(ARTICLES_QUERY)
    .then(
    response => response.data,
    error =>
      console.log('An error occured.', error.message),
  );

export const fetchArticle = id =>
  request(ARTICLE_QUERY(id))
    .then(
    response => response.data,
    error =>
      console.log('An error occured.', error.message),
  );

export const updateArticle = ({ payload }) =>
  request(UPDATE_ARTICLE_QUERY(payload.id, payload.title))
    .then(
    response => response.data,
    error =>
      console.log('An error occured.', error.message),
  );

export const deleteArticle = id =>
  request(DELETE_ARTICLE_QUERY(id))
    .then(
    response => response.data,
    error =>
      console.log('An error occured.', error.message),
  );

