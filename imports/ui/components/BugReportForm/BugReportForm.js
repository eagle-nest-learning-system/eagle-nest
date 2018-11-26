import React, { Component } from 'react';

import InputsWrapper from '../common/InputsWrapper';
import FileUploadButton from '../common/FileUploadButton';
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
            label="Name" 
            margin="dense" 
            name="name"
            value={inputs.name.value}
            onChange={this.updateValue}
            onBlur={this.blurValue}
            error={inputs.name.isFakeInvalid}
            helperText={inputs.name.message}
            type="text"
            fullWidth 
          />
          <TextField 
            select
            label="Role" 
            margin="dense" 
            name="role"
            value={inputs.role.value}
            onChange={this.updateValue}
            onBlur={this.blurValue}
            error={inputs.role.isFakeInvalid}
            helperText={inputs.role.message}
            fullWidth
          >
            <MenuItem value="Teacher">
              Teacher
            </MenuItem>
            <MenuItem value="Student">
              Student
            </MenuItem>
            <MenuItem value="Houseparent">
              Houseparent
            </MenuItem>
            <MenuItem value="Parent">
              Parent
            </MenuItem>
          </TextField>
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
          <TextField 
            label="Email" 
            margin="dense" 
            name="email"
            value={inputs.email.value}
            onChange={this.updateValue}
            onBlur={this.blurValue}
            error={inputs.email.isFakeInvalid}
            helperText={inputs.email.message}
            type="email"
            fullWidth 
          />
          <TextField 
            label="Subject" 
            margin="dense" 
            name="subject"
            value={inputs.subject.value}
            onChange={this.updateValue}
            onBlur={this.blurValue}
            error={inputs.subject.isFakeInvalid}
            helperText={inputs.subject.message}
            fullWidth 
          />
          <TextField 
            label="Error code (Optional)" 
            margin="dense" 
            name="code"
            value={inputs.code.value}
            onChange={this.updateValue}
            onBlur={this.blurValue}
            error={inputs.code.isFakeInvalid}
            helperText={inputs.code.message}
            fullWidth 
          />
          <TextField 
            label="Bug description" 
            margin="dense" 
            multiline
            rows={4}
            name="description"
            value={inputs.description.value}
            onChange={this.updateValue}
            onBlur={this.blurValue}
            error={inputs.description.isFakeInvalid}
            helperText={inputs.description.message}
            fullWidth 
          />
          <FileUploadButton buttonId="eagle-bugs-image-upload" />
        </InputsWrapper>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={!pass}
        >
          Submit
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