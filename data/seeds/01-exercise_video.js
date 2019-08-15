
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('exercise').del()
    .then(function () {
      // Inserts seed entries
      return knex('exercise').insert([
        { id: 1,
          exercise: 'Biceps Curl With Cable',
          description: `Stand around 30 - 40cm away from the cable, the feet are
           firmly on the floor. Take the bar and lift the weight with a fast movements.
           Lower the weight as with the dumbbell curls slowly and controlled.`,
         
        },
        { id: 2,
          exercise: 'Biceps Curls With Barbell',
          description: `Hold the Barbell shoulder-wide, the back is straight, the shoulders
           slightly back, the arms are streched. Bend the arms, bringing the weight up, with a
            fast movement. Without pausing, let down the bar with a slow and controlled movement.
          Don't allow your body to swing during the exercise, all work is done by the biceps,
           which are the only mucles that should move (pay attention to the elbows).`,
        },
        { id: 3,
          exercise: 'Hammercurls',
          description: `Hold two dumbbells and sit on a bench with a straight back,
           the shoulders are slightly rolled backwards. Your pals point to your
            body. Bend the arms and bring the weight up with a fast movement.
             Don't rotate your hands, as with the curls. Without any pause bring 
             the dumbbell down with a slow, controlled movement.
          Don't swing your body during the exercise, the biceps should 
          do all the work here. The elbows are at your side and don't move.`,
        },
      ]);
    });
};
