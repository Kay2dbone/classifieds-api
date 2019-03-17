const validator = require('validator');
const _ = require('lodash');

module.exports = validateSignup = data => {
  let errors = {};

  if (_.isEmpty(data.email)) {
    errors.email = 'Email is required';
  }

  if (_.isEmpty(data.password)) {
    errors.password = 'Password is required';
  }

  if (!validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }

  return {
    errors,
    isValid: _.isEmpty(errors)
  };
};
