import {
  REQUEST_ARTICLES,
  RECEIVE_ARTICLES,
  REMOVED_ARTICLE,
} from '../actions';

const articles = (state = {
  isFetching: false,
  articles: [],
}, action) => {
  switch (action.type) {
    case REQUEST_ARTICLES:
      return {
        ...state,
        isFetching: true,
      };
    case RECEIVE_ARTICLES:
      return {
        ...state,
        isFetching: false,
        articles: action.articles,
      };
    case REMOVED_ARTICLE:
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

