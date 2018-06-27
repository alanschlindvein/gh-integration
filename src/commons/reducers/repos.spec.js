import repos, { types, actions, initialState } from './repos';

describe('testing repos reducer', () => {

  it('should create a getRepos action', () => {
    expect(
      actions.updateReposList({numberOfPages: 1, items: [{}]})
    ).toEqual({
      type: types.UDPATE_REPO_LIST,
      payload: {numberOfPages: 1, items: [{}]}
    });
  });

  it('should create a getRepos action', () => {
    expect(
      actions.getRepos()
    ).toEqual({
      type: types.GET_REPOS
    });
  });

  it('should create a clearRepos action', () => {
    expect(
      actions.clearRepos()
    ).toEqual({
      type: types.CLEAR_REPOS
    });
  });

  it('should handle repos request success', () => {
    const fetchedRepos = {numberOfPages: 2, items: [{}]};

    expect(
      repos(initialState, actions.updateReposList(fetchedRepos))
    ).toEqual(
      fetchedRepos
    );
  });

  it('should handle clearRepos', () => {
    expect(
      repos({numberOfPages: 2, items: [{}]}, actions.clearRepos())
    ).toEqual(
      initialState
    );
  });
});