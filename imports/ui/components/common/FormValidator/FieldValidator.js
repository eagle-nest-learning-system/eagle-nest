import { Component } from 'react';
import validator from 'validator';

export default class FieldValidator extends Component {
  validate = () => {
    const {
      validationState,
      rules, 
      name,
      onValidate 
    } = this.props, {
      optional,
      conditions
    } = rules;

    let value, method, validWhen, message, args; 

    for (let rule of conditions) {
      value = validationState[name].value;
      method = typeof rule.method === 'string' ? validator[rule.method] : rule.method;
      args = rule.args != null ? rule.args : [];
      validWhen = rule.validWhen;
      message = rule.message || '';

      if (rule.prepend != null) value = `${rule.prepend}${value}`;

      if (rule.append != null) value = `${value}${rule.append}`;

      if (rule.compareTo != null) args.push(validationState[rule.compareTo].value);

      if (method(value, ...args) === validWhen || (optional && validator.isEmpty(value))) {
        onValidate(name, {
          isFakeInvalid: false,
          isInvalid: false,
          message: ''
        });
      }
      else {
        onValidate(name, {
          isFakeInvalid: true,
          isInvalid: true,
          message
        });
        break;
      }
    }
  }

  componentDidUpdate(prevProps) {
    const { 
      validationState,
      name
    } = this.props;

    if (validationState[name].switcher !== prevProps.validationState[name].switcher) {
      this.validate();
    }
  }

  render() {
    return null;
  }
}