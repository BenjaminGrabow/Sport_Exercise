const router = require('express').Router();

const UserPreference = require('../helpers/user-preference-model.js');

router.get("/user/:id", async (req, res) => {
  const getUserPreference = await UserPreference.findByUserId(req.params.id)
  try {
    if (getUserPreference) {
      res.status(200).json(getUserPreference);
    } else {
      res.status(400).json({ message: 'invalid Id ' });
    }
  } catch (error) {
    res.status(500).json({ errorMessage: `request could'nt process` });
  }
});


module.exports = router;