const expect = require('expect');
const validateSignup = require('../users/validateSignup');

describe('Userdata validation', () => {
  describe('Signup data', () => {
    it('should give error if empty data given', () => {
      let data = {
        email: '',
        password: ''
      };
      let result = validateSignup(data).isValid;
      expect(result).toBeFalsy();
    });

    it('should give error if email is invalid', () => {
      let data = {
        email: 'avinash@com',
        password: 'avinash'
      };
      let errors = validateSignup(data).errors;
      expect(errors.email).toBe('Email is invalid');
    });
  });
});
