import React from 'react';
import { object, string, number } from 'prop-types';

import CallSplit from '@material-ui/icons/CallSplit';
import Star from '@material-ui/icons/Star';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

import styles from './styles';

function RepoItem({classes, name, description, forks, stargazers_count}) {
   return (
      <Paper className={classes.container}>
         <h2 className={classes.name}>{name}</h2>
         <p className={classes.description}>{description}</p>
         <div className={classes.counters}>
            <div className={classes.stars}>
               <Star />
               <div className={classes.value}>{stargazers_count}</div>
            </div>
            <div className={classes.forks}>
               <CallSplit />
               <div className={classes.value}>{forks}</div>
            </div>
         </div>
      </Paper>
   );
}

RepoItem.propTypes = {
  /* own props */
  name: string.isRequired,
  description: string,
  forks: number.isRequired,
  stargazers_count: number.isRequired,
  /* material-ui styles */
  classes: object.isRequired
};

export default withStyles(styles)(RepoItem);