import { takeEvery } from 'redux-saga/effects';

import api from './api';
import service from 'commons/services/user';
import { types, actions } from 'commons/reducers/user';

function* getUser({payload}) {
  yield* api(
    service.getUser,
    payload,
    actions.updateUser,
    err => console.log(err)
  );
}

export default function* () {
  yield takeEvery(types.GET_USER, getUser);
}
