export default {
  name: {
    conditions: [{
      method: 'isEmpty',
      validWhen: false,
      message: 'This field should not be left empty!'
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
    }]
  },
  dob: {
    conditions: [{
      method: 'isEmpty',
      validWhen: false,
      message: 'This field should not be left empty!'
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
    }]
  },
  password: {
    conditions: [{
      method: 'isEmpty',
      validWhen: false,
      message: 'This field should not be left empty!'
    }]
  },
  confirmPassword: {
    conditions: [{
      method: 'isEmpty',
      validWhen: false,
      message: 'This field should not be left empty!'
    }]
  },
  number: {
    conditions: [{
      method: 'isEmpty',
      validWhen: false,
      message: 'This field should not be left empty!'
    }]
  },
  details: {
    optional: true,
    conditions: [{
      method: 'isEmail',
      validWhen: true,
      message: 'This field should be an email!'
    }]
  }
}