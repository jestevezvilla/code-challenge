import { takeLatest } from 'redux-saga/effects';
import { fetchArticlesSaga } from './articlesSagas';
import { fetchArticleSaga, updateArticleSaga } from './articleSagas';
import * as t from '../actions/constants';

export default function* rootSaga() {
  yield takeLatest(t.REQUEST_ARTICLES, fetchArticlesSaga);
  yield takeLatest(t.REQUEST_ARTICLE, fetchArticleSaga);
  yield takeLatest(t.REQUEST_UPDATE_ARTICLE, updateArticleSaga);
}
