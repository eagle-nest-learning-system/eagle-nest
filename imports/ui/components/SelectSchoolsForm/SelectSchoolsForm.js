import React, { Component } from 'react';

import InputsWrapper from '../common/InputsWrapper';
import FormValidator, { initValidationState } from '../common/FormValidator';

import validationRules from './validationRules';

import { 
  TextField,
  MenuItem,
  Button 
} from '@material-ui/core';

export default class RegisterForm extends Component {
  state = {
    inputs: {
      ...initValidationState(validationRules)
    },
    pass: false
  };

  updateValue = e => {
    const target = e.target,
    name = target.name,
    value = target.value,
    type = target.type,
    checked = target.checked;

    this.setState(prevState => ({
      inputs: {
        ...prevState.inputs,
        [name]: {
          ...prevState.inputs[name],
          value: type === 'checkbox' ? checked : value
        }
      }
    }));
  };

  blurValue = e => {
    const target = e.target,
    name = target.name;

    this.setState(prevState => ({
      inputs: {
        ...prevState.inputs,
        [name]: {
          ...prevState.inputs[name],
          switch: !prevState.inputs[name].switch
        }
      }
    }));
  };

  formSubmit = e => {
    e.preventDefault();
  };

  updateValidationRes = (name, res) => {
    let { inputs } = this.state;

    inputs = {
      ...inputs,
      [name]: {
        ...inputs[name],
        ...res
      }
    }

    const pass = Object.keys(inputs).filter(key => inputs[key].isInvalid).length <= 0;
    
    this.setState({
      inputs,
      pass
    });
  };

  render() {
    const { 
      inputs,
      pass
    } = this.state;

    return (
      <form onSubmit={this.formSubmit} autoComplete="off">
        <InputsWrapper>
          <TextField
            select 
            label="School" 
            margin="dense" 
            name="school"
            value={inputs.school.value}
            onChange={this.updateValue}
            onBlur={this.blurValue}
            error={inputs.school.isFakeInvalid}
            helperText={inputs.school.message}
            fullWidth
          >
            <MenuItem value="Bosworth Independent College">
              Bosworth Independent College
            </MenuItem>
          </TextField>
        </InputsWrapper>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={!pass}
        >
          Bring me there!
        </Button>
        <FormValidator 
          state={inputs} 
          rules={validationRules} 
          onValidate={this.updateValidationRes}
        />
      </form>
    );
  }
}