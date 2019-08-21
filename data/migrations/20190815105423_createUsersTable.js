
exports.up = function (knex) {
  return knex.schema.createTable('exercise', exercise => {
    exercise.increments();
    exercise.string('exercise', 128);
    exercise.string('category', 30);
    exercise.string('primary_muscles', 30);
    exercise.string('secondary_muscles', 30);
    exercise.string('comments', 30);
    exercise.string('description', 128);
    exercise.text('gif', 50);
    exercise.text('video', 50);
  });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('exercise');
};
