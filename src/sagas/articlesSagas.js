import { put, call } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { fetchArticles, deleteArticle } from '../api';
import * as t from '../actions/constants';

export function* fetchArticlesSaga() {
  try {
    const { articles } = yield call(fetchArticles);
    yield put({ type: t.RECEIVE_ARTICLES, articles });
  } catch (error) {
    yield put({ type: t.ERROR_FETCHING, error });
  }
}

export function* deleteArticleSaga(id) {
  try {
    yield put({ type: t.REMOVING_ANIMATION_ARTICLE, id: id.id });
    yield call(delay, 600);
    const { deleteArticle: article } = yield call(deleteArticle);
    yield put({ type: t.REMOVED_ARTICLE, article });
  } catch (error) {
    yield put({ type: t.ERROR_FETCHING, error });
  }
}

