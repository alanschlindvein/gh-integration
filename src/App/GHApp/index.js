import React, { PureComponent } from 'react';

import { withStyles } from '@material-ui/core/styles';

import styles from './styles';

class GHApp extends PureComponent {

  render() {
    return (
      <div>app</div>
    );
  }
}

export default withStyles(styles)(GHApp);