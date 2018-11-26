import React, { Component } from 'react';

import FieldValidator from './FieldValidator';

import uuidv5 from 'uuid/v5';

export default class FormValidator extends Component {
  shouldComponentUpdate(nextProps) {
    const { state } = this.props;

    for (let key in state) {
      if (state[key].value !== nextProps.state[key].value) return false;
    }

    return true;
  }

  render() {
    const { 
      state, 
      rules, 
      onValidate 
    } = this.props;

    return Object.keys(rules).map(key => 
      <FieldValidator 
        rules={rules[key]} 
        validationState={state}
        name={key}
        key={uuidv5(key, uuidv5.URL)} 
        onValidate={onValidate}  
      />
    );
  }
}

