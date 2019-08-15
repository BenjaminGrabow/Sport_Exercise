const db = require("../data/db.js");

module.exports = {
  findByUserId,
};

function findByUserId(id) {
  return db("exercise_video")
    .where('exercise_id', id);
}