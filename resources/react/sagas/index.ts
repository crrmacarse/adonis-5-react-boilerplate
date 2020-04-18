import { all } from 'redux-saga/effects';
import sampleSagas from './sampleSagas';

export default function* () {
  yield all([
    sampleSagas(),
  ]);
}
