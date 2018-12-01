import React, { Component } from "react";

import AnimatedSearchInput from "./AnimatedSearchInput";

import { IconButton, ClickAwayListener } from "@material-ui/core";
import { SearchOutlined as SearchIcon } from "@material-ui/icons";

import ToolbarComponent from "../common/ToolbarComponent";

import Router from "next/router";

import FormValidator, { initValidationState } from "../common/FormValidator";
import validationRules from "./validationRules";

export default class SearchGroup extends Component {
  state = {
    searchOpened: false,
    inputs: {
      ...initValidationState(validationRules)
    }
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

  updateFieldValues = e => {
    const target = e.target,
      name = target.name,
      value = target.value;

    this.setState(prevState => ({
      inputs: {
        ...prevState.inputs,
        [name]: {
          ...prevState.inputs[name],
          value,
          switch: !prevState.inputs[name].switch
        }
      }
    }));
  };

  submitForm = e => {
    const { inputs } = this.state;

    e.preventDefault();

    if (!inputs.query.isInvalid) {
      const encodedKeyword = encodeURIComponent(inputs.query.value);

      Router.push(`/results?query=${encodedKeyword}`);
      this.closeSearch();
    }
  };

  updateValidationRes = (name, res) => {
    this.setState(prevState => ({
      inputs: {
        ...prevState.inputs,
        [name]: {
          ...prevState.inputs[name],
          ...res
        }
      }
    }));
  };

  render() {
    const { searchOpened, inputs } = this.state;

    return (
      <ToolbarComponent>
        <IconButton color="inherit" onClick={this.openSearch}>
          <SearchIcon />
        </IconButton>
        <ClickAwayListener onClickAway={this.closeSearch}>
          <AnimatedSearchInput
            searchOpened={searchOpened}
            value={inputs.query.value}
            onChange={this.updateFieldValues}
            onSubmit={this.submitForm}
            onClose={this.closeSearch}
          />
        </ClickAwayListener>
        <FormValidator
          state={inputs}
          rules={validationRules}
          onValidate={this.updateValidationRes}
          ignoreShouldComponentUpdate
        />
      </ToolbarComponent>
    );
  }
}
