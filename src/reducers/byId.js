import { REQUEST_ARTICLE, RECEIVE_ARTICLE } from '../actions';

const defaultState = {
  isFetching: false,
  article: {},
};

const byId = (state = defaultState, action) => {
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
    default:
      return state;
  }
};

export default byId;
