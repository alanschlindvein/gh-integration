import React from 'react';
import { func, object } from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import SearchInput from './components/SearchInput';
import styles from './styles';

function Header({classes, onSearch}) {

  const handleSearch = user => onSearch(user);

  return (
    <div className={classes.container}>
      <SearchInput onSearch={handleSearch} />
    </div>
  );
}

Header.propTypes = {
  /* own actions */
  onSearch: func.isRequired,
  /* material-ui styles */
  classes: object.isRequired
};

export default withStyles(styles)(Header);