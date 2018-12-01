import { isAlphaSpace } from '../../../utils/validationMethods';

export default {
  name: {
    conditions: [
      {
        method: 'isEmpty',
        validWhen: false,
        message: 'This field should not be left empty!',
      },
      {
        method: isAlphaSpace,
        validWhen: true,
        message:
          'This field should not contain any special characters and numbers',
      },
    ],
  },
  role: {
    conditions: [
      {
        method: 'isEmpty',
        validWhen: false,
        message: 'This field should not be left empty!',
      },
    ],
  },
  school: {
    conditions: [
      {
        method: 'isEmpty',
        validWhen: false,
        message: 'This field should not be left empty!',
      },
    ],
  },
  email: {
    conditions: [
      {
        method: 'isEmpty',
        validWhen: false,
        message: 'This field should not be left empty!',
      },
      {
        method: 'isEmail',
        validWhen: true,
        message: 'This field should contain an email',
      },
    ],
  },
  subject: {
    conditions: [
      {
        method: 'isEmpty',
        validWhen: false,
        message: 'This field should not be left empty!',
      },
    ],
  },
  code: {
    optional: true,
    conditions: [
      {
        method: 'isAlphanumeric',
        validWhen: true,
        message: 'Invalid error code!',
      },
    ],
  },
  description: {
    conditions: [
      {
        method: 'isEmpty',
        validWhen: false,
        message: 'This field should not be left empty!',
      },
      {
        method: 'isLength',
        args: [
          {
            min: 20,
            max: 500,
          },
        ],
        validWhen: true,
        message:
          'This field should not be shorter than 30 and longer than 150 characters!',
      },
    ],
  },
  image: {},
};
