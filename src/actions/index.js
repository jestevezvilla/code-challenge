
import request from './request';
import { DELETE_ARTICLE_QUERY } from './queries';
import * as t from '../actions/constants';

export const fetchArticlesAction = () => ({
  type: t.REQUEST_ARTICLES,
});

export const fetchArticleAction = id => ({
  type: t.REQUEST_ARTICLE,
  id,
});

export const updateArticleAction = payload => ({
  type: t.REQUEST_UPDATE_ARTICLE,
  payload,
});
const removeArticle = json => (
  {
    type: t.REMOVED_ARTICLE,
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

