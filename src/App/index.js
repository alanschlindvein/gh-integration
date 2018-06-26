import React, { Component } from 'react';
import { object } from 'prop-types';

import JssProvider from 'react-jss/lib/JssProvider';
import { create } from 'jss';
import { createGenerateClassName } from '@material-ui/core/styles';
import {
	MuiThemeProvider,
	createMuiTheme,
	withStyles
} from '@material-ui/core/styles';

import styles from './styles';

class App extends Component {

	static propTypes = {
		/* material-ui styles */
   	classes: object.isRequired
	};

	render() {
   	const {classes} = this.props;

   	return (
   		<JssProvider
      		jss={create()}
      		generateClassName={createGenerateClassName()}
      	>
      		<MuiThemeProvider theme={createMuiTheme()}>
         		<div className={classes.container}>
         			app
         		</div>
      		</MuiThemeProvider>
   		</JssProvider>
    	);
	}
}

export default withStyles(styles)(App);
