import * as t from '../actions/constants';

const article = (state = {
  isFetching: false,
  isUpdated: false,
  article: {},
}, action) => {
  switch (action.type) {
    case t.REQUEST_ARTICLE:
      return {
        ...state,
        isFetching: true,
      };
    case t.RECEIVE_ARTICLE:
      return {
        ...state,
        isFetching: false,
        article: action.article,
      };
    case t.UPDATED_ARTICLE:
      return {
        ...state,
        isUpdated: true,
        article: action.article,
      };
    case t.POST_UPDATED_ARTICLE:
      return {
        ...state,
        isUpdated: false,
      };
    default:
      return state;
  }
};

export default article;
