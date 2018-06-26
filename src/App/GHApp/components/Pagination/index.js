import React from 'react';
import { number, object, func } from 'prop-types';

import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';

import styles from './styles';

function Pagination({classes, page, total, onChange}) {

   const handleNext = () => onChange(page + 1);

   const handlePrev = () => onChange(page - 1);

   const getPageLabel = () => `${page} / ${total}`;

   return (
      <div className={classes.container}>
         {page !== 1 &&
            <IconButton
               className={classes.prevButton}
               onClick={handlePrev}
            >
               <KeyboardArrowLeft />
            </IconButton>
         }
         <div>{getPageLabel()}</div>
         {page !== total && 
            <IconButton
               className={classes.nextButton}
               onClick={handleNext}
            >
               <KeyboardArrowRight />
            </IconButton>
         }
      </div>
   );
}

Pagination.propTypes = {
   /* own props */
   page: number.isRequired,
   total: number.isRequired,
   onChange: func.isRequired,
   /* material-ui styles */
   classes: object.isRequired
}

export default withStyles(styles)(Pagination);