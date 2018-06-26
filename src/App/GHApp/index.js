import React, { PureComponent } from 'react';
import { object, func } from 'prop-types';

import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withStyles } from '@material-ui/core/styles';

import Header from './components/Header';
import { actions } from 'commons/reducers/repos';

import styles from './styles';

class GHApp extends PureComponent {

  static propTypes = {
    getRepos: func.isRequired,
    clearRepos: func.isRequired,
    classes: object.isRequired
  };

  render() {
    const {classes, getRepos, clearRepos} = this.props;

    return (
      <div className={classes.container}>
        <Header getRepos={getRepos} clearRepos={clearRepos} />
      </div>
    );
  }
}

export default compose(
  withStyles(styles),
  connect(null, { ...actions })
)(GHApp);