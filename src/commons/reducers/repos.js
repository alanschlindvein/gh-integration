import { createAction, handleActions } from 'redux-actions';

/* types */
const GET_REPOS = 'repos/GET_REPOS';
const GET_REPOS_SUCCESS = 'repos/GET_REPOS_SUCCESS';
const CLEAR_REPOS = 'repos/CLEAR_REPOS' ;

export const types = {
  GET_REPOS,
  UDPATE_REPO_LIST,
  CLEAR_REPOS
};

/* actions */
const GET_REPOS = createAction(GET_REPOS);
const UDPATE_REPO_LIST = createAction(GET_REPOS_SUCCESS);

const CLEAR_REPOS = createAction(CLEAR_REPOS);

/* handler */
const initialState = {
  repos: []
};

export default handleActions({
  [UDPATE_REPO_LIST]: (state, {payload}) => ({
    repos: payload
  }),
  [CLEAR_REPOS]: () => initialState
});