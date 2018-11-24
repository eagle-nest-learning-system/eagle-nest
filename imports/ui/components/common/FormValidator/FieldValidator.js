import { Component } from 'react';
import validator from 'validator';

export default class FieldValidator extends Component {
  validate = () => {
    const {
      value, 
      rules, 
      name,
      onValidate 
    } = this.props, {
      optional,
      conditions
    } = rules;

    let method, validWhen, message, args; 

    for (let rule of conditions) {
      method = typeof rule.method === 'string' ? validator[rule.method] : rule.method;
      args = rule.args || [];
      validWhen = rule.validWhen;
      message = rule.message || '';

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
      }
    }
  }

  componentDidUpdate(prevProps) {
    const { 
      blurred
    } = this.props;

    if (blurred !== prevProps.blurred) {
      this.validate();
    }
  }

  render() {
    return null;
  }
}