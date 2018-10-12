import { takeLatest } from 'redux-saga/effects';
import translate from 'yandex-translate';
import { KEY } from './constants';

function* rootSaga() {
  yield takeLatest('TEST', testGetter);
}

function* testGetter() {
  yield translateTo();
}

function translateTo() {
  let translate2 = translate(KEY);
  translate2.translate('hi', { to: 'ja' }, function(err, res) {
    console.log(res.text);
  });
}

export default rootSaga;
