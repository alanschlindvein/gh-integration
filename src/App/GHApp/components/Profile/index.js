import React, { PureComponent } from 'react';
import { object, func } from 'prop-types';

import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

import styles from './styles';

class Profile extends PureComponent {

  static propTypes = {
    /* own props */
    user: object.isRequired,
    onSaveAnnotation: func.isRequired,
    /* material-ui styles */
    classes: object.isRequired
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if(prevState.annotation == null && !!nextProps.user.annotation) {
      return {annotation: nextProps.user.annotation};
    }
    return null;
  };

  state = {
    annotation: null
  };

  handleAnnotationSave = () => {
    const {user, onSaveAnnotation} = this.props;
    const {annotation} = this.state;

    onSaveAnnotation({id: user.id, annotation});
  };

  handleAnnotationChange = e => this.setState({annotation: e.target.value});

  render() {
    const {classes, user} = this.props;

    return (
      <Paper className={classes.container}>
        <div className={classes.avatar}>
          <img src={user.avatar_url} alt="Avatar" />
        </div>
        <div className={classes.info}>
          <h3 className={classes.name}>{user.name}</h3>
          <div className={classes.login}>{user.login}</div>
          <p>{user.bio}</p>
          <TextField
            fullWidth
            id="annotation"
            label="Anotações"
            value={this.state.annotation || ''}
            onChange={this.handleAnnotationChange}
            onBlur={this.handleAnnotationSave}
            margin="normal"
          />
        </div>
      </Paper>
    );
  }
}

export default withStyles(styles)(Profile);