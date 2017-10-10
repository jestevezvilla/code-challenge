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
    case t.REMOVED_ARTICLE:
      return {
        ...state,
        isFetching: false,
        articles: state.articles.filter(article => article.id !== action.article.id),
      };
    default:
      return state;
  }
};

export default articles;

