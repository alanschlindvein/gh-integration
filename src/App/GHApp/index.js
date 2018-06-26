import React, { PureComponent } from 'react';
import { object, func } from 'prop-types';

import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withStyles } from '@material-ui/core/styles';

import Header from './components/Header';
import RepoList from './components/RepoList';
import { actions as reposActions } from 'commons/reducers/repos';
import { actions as userActions } from 'commons/reducers/user';

import styles from './styles';

class GHApp extends PureComponent {

  static propTypes = {
    /* repos state */
    repos: object.isRequired,
    /* repos actions */
    getRepos: func.isRequired,
    clearRepos: func.isRequired,
    /* user state */
    user: object.isRequired,
    /* user actions */
    getUser: func.isRequired,
    /* material-ui styles */
    classes: object.isRequired
  };

  handlePageChange = () => {};

  render() {
    const {
      classes,
      getUser,
      getRepos,
      clearRepos,
      repos
    } = this.props;

    return (
      <div className={classes.container}>
        <Header
          getRepos={getRepos}
          clearRepos={clearRepos}
          getUser={getUser}
        />
        <RepoList repos={repos} onPageChange={this.handlePageChange}/>
      </div>
    );
  }
}

const mapStateToProps = ({repos, user}) => ({repos, user});

const mapDispatchToProps = {
  ...reposActions,
  ...userActions
};

export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps)
)(GHApp);