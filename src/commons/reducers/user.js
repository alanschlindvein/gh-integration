import { createAction, handleActions } from 'redux-actions';

/* types */
const GET_USER = 'user/GET_USER';
const UDPATE_USER = 'user/GET_USER_SUCCESS';
const CLEAR_USER = 'user/CLEAR_USER';

const USER_NOT_FOUND = 'user/USER_NOT_FOUND';

const GET_USER_ANNOTATION = 'user/GET_GET_USER_ANNOTATION';
const SAVE_USER_ANNOTATION = 'user/SAVE_USER_ANNOTATION';
const UPDATE_USER_ANNOTATION = 'user/SAVE_USER_ANNOTATION_SUCCESS';

export const types = {
  GET_USER,
  UDPATE_USER,
  CLEAR_USER,
  USER_NOT_FOUND,
  GET_USER_ANNOTATION,
  SAVE_USER_ANNOTATION,
  UPDATE_USER_ANNOTATION
};

/* actions */
const getUser = createAction(GET_USER);
const updateUser = createAction(UDPATE_USER);

const clearUser = createAction(CLEAR_USER);

const userNotFound = createAction(USER_NOT_FOUND);

const getUserAnnotation = createAction(GET_USER_ANNOTATION);
const saveUserAnnotation = createAction(SAVE_USER_ANNOTATION);
const updateUserAnnotation = createAction(UPDATE_USER_ANNOTATION);

export const actions = {
  getUser,
  updateUser,
  clearUser,
  userNotFound,
  getUserAnnotation,
  saveUserAnnotation,
  updateUserAnnotation
};

/* handler */
const initialState = {
  notFoundUser: false,
  profile: {}
};

export default handleActions({
  [UDPATE_USER]: (state, {payload}) => ({
    notFoundUser: false, profile: payload
  }),
  [UPDATE_USER_ANNOTATION]: (state, {payload}) => ({
    ...state, profile: {...state.profile, annotation: payload}
  }),
  [CLEAR_USER]: () => initialState,
  [USER_NOT_FOUND]: () => ({
    ...initialState, notFoundUser: true
  })
}, {});