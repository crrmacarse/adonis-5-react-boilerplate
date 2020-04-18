import { put, takeLatest } from 'redux-saga/effects';
import * as sampleTypes from 'actions/sample/types';

export function* incrementAsync() {
  yield put({ type: sampleTypes.INCREMENTED_VALUE });
}

export function* decrementValue() {
  yield put({ type: sampleTypes.DECREMENTED_VALUE });
}

export default function* () {
  yield takeLatest(sampleTypes.INCREMENT_VALUE, incrementAsync);
  yield takeLatest(sampleTypes.DECREMENT_VALUE, decrementValue);
}
