import { Component } from 'react';
import PropTypes from 'prop-types';
import validator from 'validator';

class FieldValidator extends Component {
  componentDidUpdate(prevProps) {
    const { validationState, name } = this.props;

    if (
      validationState[name].switch !== prevProps.validationState[name].switch
    ) {
      this.validate();
    }
  }

  validate = () => {
    const { validationState, rules, name, onValidate } = this.props;
    const { optional, conditions } = rules;

    let value;
    let method;
    let validWhen;
    let message;
    let args;

    for (const rule of conditions) {
      value = validationState[name].value;
      method =
        typeof rule.method === 'string' ? validator[rule.method] : rule.method;
      args = rule.args != null ? rule.args : [];
      validWhen = rule.validWhen;
      message = rule.message || '';

      if (rule.prepend != null) value = `${rule.prepend}${value}`;

      if (rule.append != null) value = `${value}${rule.append}`;

      if (rule.compareTo != null) { args.push(validationState[rule.compareTo].value); }

      if (
        method(value, ...args) === validWhen ||
        (optional && validator.isEmpty(value))
      ) {
        onValidate(name, {
          isFakeInvalid: false,
          isInvalid: false,
          message: '',
        });
      } else {
        onValidate(name, {
          isFakeInvalid: true,
          isInvalid: true,
          message,
        });
        break;
      }
    }
  };

  render() {
    return null;
  }
}

FieldValidator.propTypes = {
  name: PropTypes.string.isRequired,
  onValidate: PropTypes.func.isRequired,
  rules: PropTypes.object.isRequired,
  validationState: PropTypes.object.isRequired,
};

export default FieldValidator;
