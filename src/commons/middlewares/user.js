import { takeEvery, put } from 'redux-saga/effects';

import api from './api';
import userService from 'commons/services/user';
import annotationService from 'commons/services/annotation';
import { types, actions } from 'commons/reducers/user';

function* getUser({payload}) {
  yield* api(
    userService.getUser,
    payload,
    function* (data) {
      yield put(actions.updateUser(data));
      yield put(actions.getUserAnnotation(data.id));
    },
    function* (err) {
      yield put(actions.userNotFound());
    },
    {multipleSuccessActions: true}
  );
}

function* getUserAnnotation({payload}) {
  const annotation = annotationService.getAnnotation(payload);
  yield put(actions.updateUserAnnotation(annotation));
}

function* saveUserAnnotation({payload}) {
  const annotation = annotationService.saveAnnotation(payload);
  yield put(actions.updateUserAnnotation(annotation));
}


export default function* () {
  yield takeEvery(types.GET_USER, getUser);
  yield takeEvery(types.GET_USER_ANNOTATION, getUserAnnotation);
  yield takeEvery(types.SAVE_USER_ANNOTATION, saveUserAnnotation);
}
