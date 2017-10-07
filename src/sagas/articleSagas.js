import { put, call } from 'redux-saga/effects';
import { delay } from 'redux-saga';

import { fetchArticle, updateArticle } from '../api';

const RECEIVE_ARTICLE = 'RECEIVE_ARTICLE';
const ERROR_FETCHING = 'ERROR_FETCHING';
const UPDATED_ARTICLE = 'UPDATED_ARTICLE';
const POST_UPDATED_ARTICLE = 'POST_UPDATED_ARTICLE';

export function* fetchArticleSaga(payload) {
  try {
    const { article } = yield call(fetchArticle, payload.id);
    yield put({ type: RECEIVE_ARTICLE, article });
  } catch (error) {
    yield put({ type: ERROR_FETCHING, error });
  }
}

export function* updateArticleSaga(payload) {
  try {
    const article = yield call(updateArticle, payload);
    yield put({ type: UPDATED_ARTICLE, article: article.updateArticle });
    yield call(delay, 3000);
    yield put({ type: POST_UPDATED_ARTICLE });
  } catch (error) {
    yield put({ type: ERROR_FETCHING, error });
  }
}

