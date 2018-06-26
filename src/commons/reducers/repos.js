import { createAction, handleActions } from 'redux-actions';

/* types */
const GET_REPOS = 'repos/GET_REPOS';
const UDPATE_REPO_LIST = 'repos/GET_REPOS_SUCCESS';
const CLEAR_REPOS = 'repos/CLEAR_REPOS' ;

export const types = {
  GET_REPOS,
  UDPATE_REPO_LIST,
  CLEAR_REPOS
};

/* actions */
const getRepos = createAction(GET_REPOS);
const updateReposList = createAction(UDPATE_REPO_LIST);

const clearRepos = createAction(CLEAR_REPOS);

export const actions = {
  getRepos,
  updateReposList,
  clearRepos
};

/* handler */
const initialState = {
  repos: []
};

export default handleActions({
  [UDPATE_REPO_LIST]: (state, {payload}) => ({
    repos: payload
  }),
  [CLEAR_REPOS]: () => initialState
}, initialState);