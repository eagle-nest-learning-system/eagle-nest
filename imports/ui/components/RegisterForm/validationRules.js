import { isAlphaSpace } from '../../../utils/validationMethods';

export default {
  name: {
    conditions: [{
      method: 'isEmpty',
      validWhen: false,
      message: 'This field should not be left empty!'
    }, {
      method: isAlphaSpace,
      validWhen: true,
      message: 'This field should not contain any special characters and numbers'
    }]
  },
  role: {
    conditions: [{
      method: 'isEmpty',
      validWhen: false,
      message: 'This field should not be left empty!'
    }]
  },
  year: {
    conditions: [{
      method: 'isEmpty',
      validWhen: false,
      message: 'This field should not be left empty!'
    }, {
      method: 'isNumeric',
      validWhen: true,
      message: 'This field should not contain any special characters and letters'
    }]
  },
  dob: {
    conditions: [{
      method: 'isEmpty',
      validWhen: false,
      message: 'This field should not be left empty!'
    }, {
      method: 'isAfter',
      validWhen: false,
      message: 'This field should not contain the dates that are in the future'
    }]
  },
  gender: {
    conditions: [{
      method: 'isEmpty',
      validWhen: false,
      message: 'This field should not be left empty!'
    }]
  },
  school: {
    conditions: [{
      method: 'isEmpty',
      validWhen: false,
      message: 'This field should not be left empty!'
    }]
  },
  email: {
    conditions: [{
      method: 'isEmpty',
      validWhen: false,
      message: 'This field should not be left empty!'
    }, {
      method: 'isEmail',
      validWhen: true,
      message: 'This field should contain an email'
    }]
  },
  password: {
    conditions: [{
      method: 'isEmpty',
      validWhen: false,
      message: 'This field should not be left empty!'
    }, {
      method: 'isLength',
      args: [{
        min: 8
      }],
      validWhen: true,
      message: 'Password must be at least 8 characters long'
    }, {
      method: 'matches',
      args: [/[A-Z]/],
      validWhen: true,
      message: 'Password must contain at least an uppercase letter'
    }, {
      method: 'matches',
      args: [/[a-z]/],
      validWhen: true,
      message: 'Password must contain at least a lowercase letter'
    }, {
      method: 'matches',
      args: [/[0-9]/],
      validWhen: true,
      message: 'Password must contain at least a number from 0 to 9'
    }, {
      method: 'matches',
      args: [/[●!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/],
      validWhen: true,
      message: 'Password must contain at least a special character'
    }]
  },
  confirmPassword: {
    conditions: [{
      method: 'isEmpty',
      validWhen: false,
      message: 'This field should not be left empty!'
    }, {
      method: 'equals',
      compareTo: 'password',
      validWhen: true,
      message: 'Passwords don\'t match'
    }]
  },
  number: {
    conditions: [{
      method: 'isEmpty',
      validWhen: false,
      message: 'This field should not be left empty!'
    }, {
      method: 'isMobilePhone',
      prepend: '+44',
      args: ['en-GB'],
      validWhen: true,
      message: 'This field should contain a UK phone number'
    }]
  },
  details: {
    optional: true,
    conditions: [{
      method: 'isLength',
      args: [{
        min: 30,
        max: 300
      }],
      validWhen: true,
      message: 'This field should not be shorter than 30 and longer than 150 characters!'
    }]
  }
}