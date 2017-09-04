import {
  REQUEST_ARTICLE,
  RECEIVE_ARTICLE,
  UPDATED_ARTICLE,
  POST_UPDATED_ARTICLE,
} from '../actions';


const article = (state = {
  isFetching: false,
  isUpdated: false,
  article: {},
}, action) => {
  switch (action.type) {
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
    case UPDATED_ARTICLE:
      return {
        ...state,
        isUpdated: true,
        article: action.article,
      };
    case POST_UPDATED_ARTICLE:
      return {
        ...state,
        isUpdated: false,
      };
    default:
      return state;
  }
};

export default article;
