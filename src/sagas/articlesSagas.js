import { put, call } from 'redux-saga/effects';
import { fetchArticles } from '../api';
import * as t from '../actions/constants';

export function* fetchArticlesSaga() {
  try {
    const { articles } = yield call(fetchArticles);
    yield put({ type: t.RECEIVE_ARTICLES, articles });
  } catch (error) {
    yield put({ type: t.ERROR_FETCHING, error });
  }
}

