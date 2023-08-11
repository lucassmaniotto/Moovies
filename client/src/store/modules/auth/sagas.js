import { call, put, all, takeLatest } from 'redux-saga/effects';
import * as actions from './actions';
import * as types from '../types';

const request = () =>
  new Promise((resolve) => {
    localStorage.setItem('token', 'test');
    resolve();
  });

function* auth() {
  try {
    yield call(request);
    const token = localStorage.getItem('token');
    if (token) {
      yield put(actions.loginSuccess());
    } else {
      yield put(actions.loginFailure());
    }
  } catch (error) {
    yield put(actions.loginFailure());
  }
}

export default all([takeLatest(types.LOGIN_REQUEST, auth)]);
