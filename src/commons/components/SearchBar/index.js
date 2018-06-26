import React, { PureComponent } from 'react';
import { func, string, object, bool } from 'prop-types';

import { compose } from 'recompose';
import { injectIntl } from 'react-intl';
import { DebounceInput } from 'react-debounce-input';

import Search from '@material-ui/icons/Search';
import Close from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';

import styles from './styles';

class SearchBar extends PureComponent {

  static defaultProps = {
    autoFocus: false
  };

  static propTypes = {
    /* own props */
    autoFocus: bool,
    placeholder: string,
    onSearch: func.isRequired,
    /* material-ui styles */
    classes: object.isRequired,
    /* react-intl */
    intl: object.isRequired
  };

  state = {
    searchText: ''
  };

  handleChange = e => {
    const searchText = e.target.value.toLowerCase();
    this.setState({searchText});
    this.props.onSearch(searchText);
  };

  handleClear = () => {
    this.setState({searchText: ''});
    this.props.onSearch();
  };

  render() {
    const {classes, placeholder, intl} = this.props;
    const {searchText} = this.state;

    return (
      <div
        className={classes.container}
      >
        <Search className={classes.searchIncon} />
        <DebounceInput
          forceNotifyByEnter
          minLength={2}
          placeholder={
            placeholder || intl.formatMessage({id: 'LABELS.COMMONS.SEARCH'})
          }
          value={searchText}
          debounceTimeout={300}
          className={classes.inputField}
          onChange={this.handleChange}
        />
        {!!searchText && (
          <IconButton
            className={classes.clearButton}
            onClick={this.handleClear}
          >
            <Close />
          </IconButton>
        )}
      </div>
    );
  }
}

export default compose(
  injectIntl,
  withStyles(styles)
)(SearchBar);
