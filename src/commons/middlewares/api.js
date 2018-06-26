import { call, put } from 'redux-saga/effects';

export default function* (
  fn,
  parameter,
  success,
  failure,
  settings={multipleSuccessActions: false}
) {
  try {
    const response = yield call(fn, parameter);
    const data = response ? response.data : {};
    yield (settings.multipleSuccessActions
      ? call(success, data)
      : put(success(data))
    );
  } catch(error) {
    yield call(failure, error);
  }
}
