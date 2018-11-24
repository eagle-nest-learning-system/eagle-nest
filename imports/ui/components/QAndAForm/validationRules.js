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
  type: {
    conditions: [{
      method: 'isEmpty',
      validWhen: false,
      message: 'This field should not be left empty!'
    }]
  },
  content: {
    conditions: [{
      method: 'isEmpty',
      validWhen: false,
      message: 'This field should not be left empty!'
    }, {
      method: 'isLength',
      args: [{
        min: 20,
        max: 300
      }],
      validWhen: true,
      message: 'This field should not be shorter than 30 and longer than 150 characters!'
    }]
  }
}