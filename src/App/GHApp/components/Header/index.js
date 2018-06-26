import React, { PureComponent } from 'react';
import { func, object } from 'prop-types';

import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

import SearchInput from './components/SearchInput';
import styles from './styles';

class Header extends PureComponent {

  static propTypes = {
    /* own actions */
    getRepos: func.isRequired,
    clearRepos: func.isRequired,
    getUser: func.isRequired,
    /* material-ui styles */
    classes: object.isRequired
  };

  handleSearch = user => {
    if(!!user) {
      this.props.getRepos({user, page: 1});
      this.props.getUser(user);
    }
    this.props.clearRepos();
  };

  render() {
    const {classes} = this.props;

    return (
      <Paper className={classes.container}>
        <SearchInput onSearch={this.handleSearch} />
      </Paper>
    );
  }
}

export default withStyles(styles)(Header);