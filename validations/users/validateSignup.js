const validator = require('validator');
const _ = require('lodash');

module.exports = validateSignup = data => {
  let errors = {};

  if (_.isEmpty(data.email)) {
    errors.email = 'Email is required';
  } else if (!validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }

  if (_.isEmpty(data.password)) {
    errors.password = 'Password is required';
  }

  if (_.isEmpty(data.confirmPassword)) {
    errors.confirmPassword = 'Confirm password is required';
  }

  if (errors.confirmPassword !== errors.password) {
    errors.password = 'Password should match';
  }

  return {
    errors,
    isValid: _.isEmpty(errors)
  };
};
