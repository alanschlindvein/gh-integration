import React from 'react';
import { object } from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import styles from './styles';

function NotFound({classes}) {
   return (
      <div className={classes.container}>
         <div>
            <h2>Whoops!</h2>
            <p>Nenhum usuário foi encontrado. Tente novamente!</p>
         </div>
      </div>
   );
}

NotFound.propTypes = {
   /* material-ui styles */
   classes: object.isRequired
 };

export default withStyles(styles)(NotFound);