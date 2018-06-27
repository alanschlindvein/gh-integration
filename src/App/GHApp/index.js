import React, { PureComponent, Fragment } from 'react';
import { object, func } from 'prop-types';

import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withStyles } from '@material-ui/core/styles';

import Header from './components/Header';
import RepoList from './components/RepoList';
import Pagination from './components/Pagination';
import NotFound from './components/NotFound';
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
    clearUser: func.isRequired,
    /* material-ui styles */
    classes: object.isRequired
  };

  state = {
    user: '',
    page: 1
  };

  handlePageChange = page => {
    const {user} = this.state;
    this.setState({page});
    this.props.getRepos({user, page});
  };

  handleUserSearch = user => {
    this.setState({user, page: 1});
    if(!!user) {
      this.props.getRepos({user, page: 1});
      this.props.getUser(user);
      return;
    }
    this.props.clearRepos();
    this.props.clearUser();
  };

  renderUserReposContent = repos => (
    <Fragment>
      <RepoList 
        repos={repos}
        onPageChange={this.handlePageChange}
      />
      {repos.numberOfPages > 1 && 
        <Pagination 
          page={this.state.page}
          total={repos.numberOfPages}
          onChange={this.handlePageChange}
        />
      }
    </Fragment>
  );

  render() {
    const {classes, user, repos} = this.props;

    return (
      <div className={classes.container}>
        <Header onSearch={this.handleUserSearch} />
        <div className={classes.content}>
          {user.notFoundUser
            ? <NotFound />
            : this.renderUserReposContent(repos)
          }
        </div>
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