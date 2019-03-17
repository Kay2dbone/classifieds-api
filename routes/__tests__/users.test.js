const request = require('supertest');
const expect = require('expect');

const { app } = require('../../server');

describe('Users Route', () => {
  describe('POST /signup', () => {
    it('should give error on empty data', done => {
      request(app)
        .post('/api/users/signup')
        .send({ email: '', password: '' })
        .expect(res => {
          expect(res.body).toEqual({
            email: 'Email is required',
            password: 'Password is required',
            confirmPassword: 'Confirm password is required'
          });
        })
        .end(done);
    });
  });
});
