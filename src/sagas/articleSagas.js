import { put, call } from 'redux-saga/effects';
import { delay } from 'redux-saga';

import * as t from '../actions/constants';
import { fetchArticle, updateArticle } from '../api';

export function* fetchArticleSaga(payload) {
  try {
    const { article } = yield call(fetchArticle, payload.id);
    yield put({ type: t.RECEIVE_ARTICLE, article });
  } catch (error) {
    yield put({ type: t.ERROR_FETCHING, error });
  }
}

export function* updateArticleSaga(payload) {
  try {
    const { updateArticle: article } = yield call(updateArticle, payload);
    yield put({ type: t.UPDATED_ARTICLE, article });
    yield call(delay, 3000);
    yield put({ type: t.POST_UPDATED_ARTICLE });
  } catch (error) {
    yield put({ type: t.ERROR_FETCHING, error });
  }
}

