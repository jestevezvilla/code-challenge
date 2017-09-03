import { REQUEST_ARTICLES,
         RECEIVE_ARTICLES,
         REQUEST_ARTICLE,
         RECEIVE_ARTICLE,
         REMOVED_ARTICLE,
         UPDATED_ARTICLE } from '../actions';

const defaultState = {
  isFetching: false,
  articles: [],
  article: {},
};

const articles = (state = defaultState, action) => {
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
    case REQUEST_ARTICLE:
      return {
        ...state,
        isFetching: true,
      };
    case RECEIVE_ARTICLE:
      return {
        ...state,
        isFetching: false,
        article: action.article,
      };
    case REMOVED_ARTICLE:
      return {
        ...state,
        isFetching: false,
        articles: state.articles.filter(article => article.id !== action.article.id),
      };
    case UPDATED_ARTICLE:
      return {
        ...state,
        isFetching: false,
        article: action.article,
      };
    default:
      return state;
  }
};

export default articles;
