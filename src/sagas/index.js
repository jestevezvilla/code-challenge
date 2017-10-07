import { takeLatest } from 'redux-saga/effects';
import { fetchArticlesSaga } from './articlesSagas';
import { fetchArticleSaga, updateArticleSaga } from './articleSagas';

const REQUEST_ARTICLES = 'REQUEST_ARTICLES';
const REQUEST_ARTICLE = 'REQUEST_ARTICLE';
const REQUEST_UPDATE_ARTICLE = 'REQUEST_UPDATE_ARTICLE';

export default function* rootSaga() {
  yield takeLatest(REQUEST_ARTICLES, fetchArticlesSaga);
  yield takeLatest(REQUEST_ARTICLE, fetchArticleSaga);
  yield takeLatest(REQUEST_UPDATE_ARTICLE, updateArticleSaga);
}
