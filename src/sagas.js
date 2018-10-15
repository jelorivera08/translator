import { takeLatest } from 'redux-saga/effects';
import translate from 'yandex-translate';
import { KEY } from './constants';

function* rootSaga() {
  yield takeLatest('TRANSLATE_API_CALL', translateTo);
}

function translateTo(props) {
  const { to, sentence, translateWord } = props;
  let translateWithKey = translate(KEY);

  try {
    translateWithKey.translate(sentence, { to: to }, function(err, res) {
      translateWord(res);
    });
  } catch (err) {
    alert('API ERROR');
  }
}

export default rootSaga;
