import React, { Component } from 'react';

import AnimatedSearchInput from './AnimatedSearchInput';

import { 
  IconButton, 
  ClickAwayListener 
} from '@material-ui/core';
import { SearchOutlined as SearchIcon } from '@material-ui/icons';

import ToolbarComponent from '../common/ToolbarComponent';

import Router from 'next/router';

export default class SearchGroup extends Component {
  state = {
    searchOpened: false,
    inputs: {
      query: ''
    },
    validationRes: {}
  };

  openSearch = () => {
    this.setState({
      searchOpened: true
    });
  };

  closeSearch = () => {
    this.setState({
      searchOpened: false
    });
  };

  updateQuery = e => {
    const target = e.target,
    name = target.name,
    value = target.value;
    
    this.setState(prevState => ({
      inputs: {
        ...prevState.inputs,
        [name]: value
      }
    }));
  }

  redirectToResultPage = e => {
    e.preventDefault();

    const encodedKeyword = encodeURIComponent(this.state.query.value);

    Router.push(`/results?query=${encodedKeyword}`);
    this.closeSearch();
  }

  render() {
    const { 
      searchOpened,
      inputs  
    } = this.state;

    return (
      <ToolbarComponent>
        <IconButton 
          color="inherit" 
          onClick={this.openSearch}
        >
          <SearchIcon />
        </IconButton>
        <ClickAwayListener onClickAway={this.closeSearch}>
          <AnimatedSearchInput 
            searchOpened={searchOpened} 
            query={inputs.query} 
            updateQuery={this.updateQuery}
            redirectToResultPage={this.redirectToResultPage}
            closeSearch={this.closeSearch} 
          />
        </ClickAwayListener>
      </ToolbarComponent>
    );
  }
}
