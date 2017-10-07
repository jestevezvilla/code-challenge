import { put, call } from 'redux-saga/effects';
import { fetchArticles } from '../api';

const RECEIVE_ARTICLES = 'RECEIVE_ARTICLES';
const ERROR_FETCHING = 'ERROR_FETCHING';

export function* fetchArticlesSaga() {
  try {
    const { articles } = yield call(fetchArticles);
    yield put({ type: RECEIVE_ARTICLES, articles });
  } catch (error) {
    yield put({ type: ERROR_FETCHING, error });
  }
}

