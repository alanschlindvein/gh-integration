import { takeEvery, put } from 'redux-saga/effects';

import api from './api';
import service from 'commons/services/repos';
import { types, actions } from 'commons/reducers/repos';

function* getRepos({payload}) {
  yield* api(
    service.getRepos,
    payload,
    actions.updateReposList,
    function* (err) {
      yield put(actions.clearRepos());
    }
  );
}

export default function* () {
  yield takeEvery(types.GET_REPOS, getRepos);
}
