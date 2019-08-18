
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('exercise_video').del()
    .then(function () {
      // Inserts seed entries
      return knex('exercise_video').insert([
        {
            id: 1,
            video: 'www.TWOOOOOOOOOO.de',
            gif: 'https://i.makeagif.com/media/11-07-2015/P7PT43.gif',
            exercise_id: 2
          },
          {
            id: 2,
            video: 'https://thumbs.gfycat.com/AlarmingVeneratedFawn-small.gif',
            gif: 'https://thumbs.gfycat.com/AlarmingVeneratedFawn-small.gif',
            exercise_id: 3
          },
          {
            id: 3,
            video: 'www.ONEEEEEEE.de',
            gif: 'http://rs1074.pbsrc.com/albums/w415/cherokeehackslife/Workout%20Gifs/Bicep-Curl---Cables.gif~c200',
            exercise_id: 1
          },
      ]);
    });
};
