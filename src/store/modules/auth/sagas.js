// import {browserHistory} from 'react-router'
import { takeLatest, call, put, all } from 'redux-saga/effects';

import history from '../../../services/history';
import backApi from '../../../services/backApi';
import { signInSuccess } from './actions';

export function* signIn({ payload }) {
  const { email, password } = payload;

  const response = yield call(backApi.post, 'sessions', {
    email,
    password,
  });

  const { token, user } = response.data;
  yield put(signInSuccess(token, user));

 history.push('/main');
}

export function* signUp({ payload }) {
  const { email, password } = payload;

  yield call(backApi.post, 'users', {
    email,
    password,
  });

  history.push('/');
}

export function signOut() {
  history.push('/');
}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('@auth/SIGN_OUT', signOut)
]);