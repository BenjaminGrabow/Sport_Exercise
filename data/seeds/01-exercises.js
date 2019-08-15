
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('exercise_video').del()
    .then(function () {
      // Inserts seed entries
      return knex('exercise_video').insert([
        {
            id: 1,
            video: 'www.numberONEEEEEEEEEEEEE.de',
            gif: 'haha',
            exercise_id: 2
          },
          {
            id: 2,
            video: 'www.TWOOOOOOOOOO.de',
            gif: 'haha',
            exercise_id: 3
          },
          {
            id: 3,
            video: 'www.THREEEEEEEEEEEEEEEEEEEEEEEEE.de',
            gif: 'haha',
            exercise_id: 1
          },
      ]);
    });
};
