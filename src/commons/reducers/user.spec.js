import user, { types, actions, initialState } from './user';
import { get } from 'http';

describe('testing user reducer', () => {

  it('should create a getUser action', () => {
    expect(
      actions.getUser()
    ).toEqual({
      type: types.GET_USER
    });
  });

  it('should create a clearUser action', () => {
    expect(
      actions.clearUser()
    ).toEqual({
      type: types.CLEAR_USER
    });
  });

  it('should create an userNotFound action', () => {
    expect(
      actions.userNotFound()
    ).toEqual({
      type: types.USER_NOT_FOUND
    });
  });

  it('should create an updateUser action', () => {
    expect(
      actions.updateUser({id: '1', name: 'toto', bio: 'africa'})
    ).toEqual({
      type: types.UDPATE_USER,
      payload: {id: '1', name: 'toto', bio: 'africa'}
    });
  });

  it('should create a getUserAnnotation action', () => {
    expect(
      actions.getUserAnnotation()
    ).toEqual({
      type: types.GET_USER_ANNOTATION
    });
  });

  it('should create a saveUserAnnotation action', () => {
    expect(
      actions.saveUserAnnotation('toto')
    ).toEqual({
      type: types.SAVE_USER_ANNOTATION, payload: 'toto'
    });
  });

  it('should create an updateUserAnnotation action', () => {
    expect(
      actions.updateUserAnnotation('toto')
    ).toEqual({
      type: types.UPDATE_USER_ANNOTATION, payload: 'toto'
    });
  });

  it('should handle clearUser', () => {
    expect(
      user({notFoundUser: false, profile: {id: '1'}}, actions.clearUser())
    ).toEqual(
      initialState
    );
  });

  it('should handle updateUser', () => {

    const fetchedUser = {
      id: '1',
      name: 'toto',
      bio: 'africa'
    };

    const expectedState = {
      notFoundUser: false,
      profile: fetchedUser
    };

    expect(
      user({notFoundUser: false, profile: {}}, actions.updateUser(fetchedUser))
    ).toEqual(
      expectedState
    );
  });

  it('should handle upadteUserAnnotation', () => {

    const fetchedUser = {
      id: '1',
      name: 'toto',
      bio: 'africa'
    };

    const expectedState = {
      notFoundUser: false,
      profile: {
        ...fetchedUser,
        annotation: 'toto'
      }
    };

    expect(
      user(
        {notFoundUser: false, profile: fetchedUser},
        actions.updateUserAnnotation('toto')
      )
    ).toEqual(
      expectedState
    );
  });
});