import { createAction, handleActions } from 'redux-actions';

/* types */
const GET_USER = 'repos/GET_USER';
const UDPATE_USER = 'repos/GET_USER_SUCCESS';
const CLEAR_USER = 'repos/CLEAR_USER' ;

export const types = {
  GET_USER,
  UDPATE_USER,
  CLEAR_USER
};

/* actions */
const getUser = createAction(GET_USER);
const updateUser = createAction(UDPATE_USER);

const clearUser = createAction(CLEAR_USER);

export const actions = {
  getUser,
  updateUser,
  clearUser
};

/* handler */
export default handleActions({
  [UDPATE_USER]: (state, {payload}) => payload,
  [CLEAR_USER]: () => {}
}, {});