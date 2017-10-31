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

export const deleteArticleAction = id => ({
  type: t.REQUEST_REMOVE_ARTICLE,
  id,
});
