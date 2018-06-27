import React, { PureComponent } from 'react';
import { object, func } from 'prop-types';

import Search from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

import styles from './styles';

class Header extends PureComponent {

  static propTypes = {
    /* own actions */
    onSearch: func.isRequired,
    classes: object.isRequired
  };

  state = {
    user: ''
  };

  handleSearch = () => this.props.onSearch(this.state.user);

  handleChange = e => {
    const user = e.target.value;

    this.setState({user});
    !user && this.props.onSearch();
  }

  handleKeyPress = e => {
    const user = e.target.value.trim();
    (e.key === 'Enter') && this.props.onSearch(user);
  };

  render() {
    const {classes} = this.props;

    return (
      <div className={classes.container}>
        <TextField
          autoFocus
          autoComplete="off"
          className={classes.textField}
          id="user"
          placeholder="Buscar por usuário"
          value={this.state.user}
          onKeyDown={this.handleKeyPress}
          onChange={this.handleChange}
          margin="normal"
        />
        <IconButton
          className={classes.searchButton}
          onClick={this.handleSearch}
        >
          <Search/>
        </IconButton>
      </div>
    );
  }
}

export default withStyles(styles)(Header);