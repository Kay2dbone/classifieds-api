const express = require('express');
const router = express.Router();

const validateSignup = require('../../validations/users/validateSignup');

router.get('/', (req, res) => {
  res.send('Users route working');
});

router.post('/signup', (req, res) => {
  const { errors, isValid } = validateSignup(req.body);
  if (!isValid) {
    res.status(400).send(errors);
  }
});

module.exports = router;
