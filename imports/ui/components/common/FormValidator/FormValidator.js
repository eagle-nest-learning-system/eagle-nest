import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FieldValidator from './FieldValidator';
import uuidv5 from 'uuid/v5';

class FormValidator extends Component {
  shouldComponentUpdate(nextProps) {
    const { state, ignoreShouldComponentUpdate } = this.props;

    if (ignoreShouldComponentUpdate) return true;

    for (const key in state) {
      if (state[key].value !== nextProps.state[key].value) return false;
    }

    return true;
  }

  render() {
    const { state, rules, onValidate } = this.props;

    return Object.keys(rules).map(key => (
      <FieldValidator
        rules={rules[key]}
        validationState={state}
        name={key}
        key={uuidv5(key, uuidv5.URL)}
        onValidate={onValidate}
      />
    ));
  }
}

FormValidator.propTypes = {
  ignoreShouldComponentUpdate: PropTypes.bool,
  onValidate: PropTypes.func.isRequired,
  rules: PropTypes.object.isRequired,
  state: PropTypes.object.isRequired,
};

FormValidator.defaultProps = {
  ignoreShouldComponentUpdate: false,
};

export default FormValidator;
