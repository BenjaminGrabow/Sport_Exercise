
exports.up = function(knex) {
  return knex.schema.createTable('exercise', exercise => {
    exercise.increments();
    exercise
      .string('exercise', 128)
      .unique();
    exercise.string('description', 128).notNullable();
  })
  .createTable('exercise_video', exercise => {
    exercise.increments();
    exercise.text('gif', 50);
    exercise.text('video', 50);
    exercise.integer('exercise_id').unique();
  })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('exercise')
    .dropTableIfExists('exercise_video')
};
