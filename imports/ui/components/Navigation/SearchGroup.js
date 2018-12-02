import React, { Component } from 'react';
import AnimatedSearchInput from './AnimatedSearchInput';
import { IconButton, ClickAwayListener } from '@material-ui/core';
import { SearchOutlined as SearchIcon } from '@material-ui/icons';
import ToolbarComponent from '../common/ToolbarComponent';
import Router from 'next/router';
import FormValidator, { initValidationState } from '../common/FormValidator';
import validationRules from './validationRules';
import { Spring, config } from 'react-spring';

export default class SearchGroup extends Component {
  state = {
    searchOpened: false,
    inputs: {
      ...initValidationState(validationRules),
    },
  };

  handleOpenSearch = () => {
    this.setState({
      searchOpened: true,
    });
  };

  handleCloseSearch = () => {
    this.setState({
      searchOpened: false,
    });
  };

  handleChange = e => {
    const target = e.target,
      { name, value } = target;

    this.setState(prevState => ({
      inputs: {
        ...prevState.inputs,
        [name]: {
          ...prevState.inputs[name],
          value,
          switch: !prevState.inputs[name].switch,
        },
      },
    }));
  };

  handleSubmit = e => {
    const { inputs } = this.state;

    e.preventDefault();

    if (!inputs.query.isInvalid) {
      const encodedKeyword = encodeURIComponent(inputs.query.value);

      Router.push(`/results?query=${encodedKeyword}`);
      this.handleCloseSearch();
    }
  };

  handleValidate = (name, res) => {
    this.setState(prevState => ({
      inputs: {
        ...prevState.inputs,
        [name]: {
          ...prevState.inputs[name],
          ...res,
        },
      },
    }));
  };

  render() {
    const { searchOpened, inputs } = this.state;

    return (
      <ToolbarComponent>
        <IconButton color="inherit" onClick={this.handleOpenSearch}>
          <SearchIcon />
        </IconButton>
        <ClickAwayListener onClickAway={this.handleCloseSearch}>
          <Spring
            native
            from={{ transform: 'translateY(-110%)' }}
            to={{ transform: `translateY(${searchOpened ? 0 : '-110%'})` }}
            config={config.wobbly}
          >
            {style => (
              <AnimatedSearchInput
                style={style}
                value={inputs.query.value}
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                onClose={this.handleCloseSearch}
              />
            )}
          </Spring>
        </ClickAwayListener>
        <FormValidator
          state={inputs}
          rules={validationRules}
          onValidate={this.handleValidate}
          ignoreShouldComponentUpdate
        />
      </ToolbarComponent>
    );
  }
}
