import React, { PureComponent } from 'react';
import { func } from 'prop-types';

import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

import SearchInput from './components/SearchInput';
import styles from './styles';

class Header extends PureComponent {

  static propTypes = {
    /* own actions */
    getRepos: func.isRequired,
    clearRepos: func.isRequired
  };

  handleSearch = user => {
    console.log(user);
    //!!text && this.props.searchRepos({text, page: 0});
    //this.props.clearRepos();
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