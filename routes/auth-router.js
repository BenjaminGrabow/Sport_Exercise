const router = require('express').Router();

const Users = require('../helpers/users-model.js');

router.get('/', (req, res) => {

  Users.find()
    .then(saved => {
      res.status(201).json(saved);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

module.exports = router;