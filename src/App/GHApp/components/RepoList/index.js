import React, { PureComponent } from 'react';
import { object, func } from 'prop-types';

import List from '@material-ui/core/List';
import { withStyles } from '@material-ui/core/styles';

import styles from './styles';

class RepoList extends PureComponent {

  static propTypes = {
    /* own props */
    repos: object.isRequired,
    onPageChange: func.isRequired,
    /* material-ui styles */
    classes: object.isRequired
  };

  render() {
    const {classes} = this.props;

    return (
      <div className={classes.container}>
        <List>

        </List>
      </div>
    );
  }
}

export default withStyles(styles)(RepoList);