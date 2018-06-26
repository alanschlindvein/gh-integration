import React, { PureComponent } from 'react';
import { func } from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import styles from './styles';

class Header extends PureComponent {

  static propTypes = {
    /* own actions */
    getRepos: func.isRequired,
    clearRepos: func.isRequired
  };

  handleSearch = text => {
    !!text && this.props.searchRepos({text, page: 0});
    this.props.clearRepos();
  };

  render() {
    return (
      <div></div>
    );
  }
}

export default withStyles(styles)(Header);