import { createAction, handleActions } from 'redux-actions';

/* types */
const GET_USER = 'user/GET_USER';
const UDPATE_USER = 'user/GET_USER_SUCCESS';
const CLEAR_USER = 'user/CLEAR_USER';

const USER_NOT_FOUND = 'user/USER_NOT_FOUND';

export const types = {
  GET_USER,
  UDPATE_USER,
  CLEAR_USER,
  USER_NOT_FOUND
};

/* actions */
const getUser = createAction(GET_USER);
const updateUser = createAction(UDPATE_USER);

const clearUser = createAction(CLEAR_USER);

const userNotFound = createAction(USER_NOT_FOUND);

export const actions = {
  getUser,
  updateUser,
  clearUser,
  userNotFound,
};

/* handler */
const initialState = {
  notFoundUser: false,
  profile: {}
}

export default handleActions({
  [UDPATE_USER]: (state, {payload}) => ({
    notFoundUser: false, profile: payload
  }),
  [CLEAR_USER]: () => initialState,
  [USER_NOT_FOUND]: () => ({
    ...initialState, notFoundUser: true
  })
}, {});