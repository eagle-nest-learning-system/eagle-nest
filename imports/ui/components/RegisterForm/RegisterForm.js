import React, { Component } from 'react';

import InputsWrapper from '../common/InputsWrapper';
import FormValidator, { initValidationState } from '../common/FormValidator';

import validationRules from './validationRules';

import { 
  Grid, 
  TextField,
  MenuItem,
  InputAdornment,
  Button,
  IconButton 
} from '@material-ui/core';
import { 
  VisibilityOutlined as VisibilityIcon,
  VisibilityOffOutlined as VisibilityOffIcon 
} from '@material-ui/icons';

export default class RegisterForm extends Component {
  state = {
    passwordVisibility: false,
    inputs: {
      ...initValidationState(validationRules)
    },
    pass: false
  };

  toggleVisibility = () => {
    this.setState(prevState => ({
      passwordVisibility: !prevState.passwordVisibility
    }));
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
      passwordVisibility, 
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
          <Grid 
            container
            spacing={16}
          >
            <Grid 
              item 
              xs={12} 
              md={4}
            >
              <TextField 
                label="Year" 
                margin="dense" 
                name="year"
                value={inputs.year.value}
                onChange={this.updateValue}
                onBlur={this.blurValue}
                error={inputs.year.isFakeInvalid}
                helperText={inputs.year.message}
                type="number"
                fullWidth 
              />
            </Grid>
            <Grid 
              item 
              xs={12} 
              md={4}
            >
              <TextField 
                label="DoB" 
                margin="dense" 
                name="dob"
                value={inputs.dob.value}
                onChange={this.updateValue}
                onBlur={this.blurValue}
                error={inputs.dob.isFakeInvalid}
                helperText={inputs.dob.message}
                type="date"
                fullWidth
                InputLabelProps={{
                  shrink: true
                }} 
              />
            </Grid>
            <Grid 
              item 
              xs={12} 
              md={4}
            >
              <TextField 
                select
                label="Gender" 
                margin="dense" 
                name="gender"
                value={inputs.gender.value}
                onChange={this.updateValue}
                onBlur={this.blurValue}
                error={inputs.gender.isFakeInvalid}
                helperText={inputs.gender.message}
                fullWidth
              >
                <MenuItem value="Male">
                  Male
                </MenuItem>
                <MenuItem value="Female">
                  Female
                </MenuItem>
              </TextField>
            </Grid>
          </Grid>
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
            label="Password" 
            margin="dense" 
            name="password"
            value={inputs.password.value}
            onChange={this.updateValue}
            onBlur={this.blurValue}
            error={inputs.password.isFakeInvalid}
            helperText={inputs.password.message}
            type={passwordVisibility ? "text" : "password"}
            fullWidth
            InputProps={{
              endAdornment:
                <InputAdornment position="end">
                  <IconButton onClick={this.toggleVisibility}>
                    {passwordVisibility ?
                      <VisibilityIcon />
                    :           
                      <VisibilityOffIcon />
                    }
                  </IconButton>
                </InputAdornment>
            }} 
          />
          <TextField 
            label="Confirm password" 
            margin="dense" 
            name="confirmPassword"
            value={inputs.confirmPassword.value}
            onChange={this.updateValue}
            onBlur={this.blurValue}
            error={inputs.confirmPassword.isFakeInvalid}
            helperText={inputs.confirmPassword.message}
            type={passwordVisibility ? "text" : "password"}
            fullWidth
          />
          <TextField 
            label="Phone number"
            margin="dense"
            name="number"
            value={inputs.number.value}
            onChange={this.updateValue}
            onBlur={this.blurValue}
            error={inputs.number.isFakeInvalid}
            helperText={inputs.number.message}
            InputProps={{
              startAdornment:
                <InputAdornment position="start">
                  +44
                </InputAdornment>
            }}
            fullWidth 
          />
          <TextField 
            label="Extra details (Optional)" 
            margin="dense" 
            multiline
            rows={4}
            name="details"
            value={inputs.details.value}
            onChange={this.updateValue}
            onBlur={this.blurValue}
            error={inputs.details.isFakeInvalid}
            helperText={
              inputs.details.message === '' 
              ? 
                'When submitted, your information will be sent to the school\'s IT administrator for confirmation. Extra details are useful and might reduce the confirmation time' 
              : 
                inputs.details.message
            }
            fullWidth 
          />
        </InputsWrapper>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={!pass}
        >
          Register
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