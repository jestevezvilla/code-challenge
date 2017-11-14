import * as t from '../actions/constants';

const articles = (state = {
  isFetching: false,
  articles: [],
}, action) => {
  switch (action.type) {
    case t.REQUEST_ARTICLES:
      return {
        ...state,
        isFetching: true,
      };
    case t.RECEIVE_ARTICLES:
      return {
        ...state,
        isFetching: false,
        articles: action.articles,
      };
    case t.REMOVING_ANIMATION_ARTICLE:
      return {
        ...state,
        articles: state.articles.map(article =>
          (article.id === action.id ?
            { ...article, removing: true } : article)),
      };
    case t.REMOVED_ARTICLE:
      return {
        ...state,
        articles: state.articles.filter(article => !article.removing),
      };
    default:
      return state;
  }
};

export default articles;

