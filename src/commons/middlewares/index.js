import { all } from 'redux-saga/effects';

import repos from './repos';
import user from './user';

export default function* rootSaga() {
  yield all([
    repos(),
    user()
  ]);
}
