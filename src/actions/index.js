
import request from './request';
import { DELETE_ARTICLE_QUERY } from './queries';

export const REQUEST_ARTICLES = 'REQUEST_ARTICLES';
export const RECEIVE_ARTICLES = 'RECEIVE_ARTICLES';

export const REQUEST_ARTICLE = 'REQUEST_ARTICLE';
export const RECEIVE_ARTICLE = 'RECEIVE_ARTICLE';

export const REMOVED_ARTICLE = 'REMOVED_ARTICLE';

export const REQUEST_UPDATE_ARTICLE = 'REQUEST_UPDATE_ARTICLE';

export const UPDATED_ARTICLE = 'UPDATED_ARTICLE';

export const POST_UPDATED_ARTICLE = 'POST_UPDATED_ARTICLE';

export const fetchArticlesAction = () => ({
  type: REQUEST_ARTICLES,
});

export const fetchArticleAction = id => ({
  type: REQUEST_ARTICLE,
  id,
});

export const updateArticleAction = payload => ({
  type: REQUEST_UPDATE_ARTICLE,
  payload,
});




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

