const sportExercises = [
  ////    ARMS   \\\\
  { id: 1,
    exercise: 'Biceps Curl With Cable',
    category: 'Arms',
    primary_muscles: 'Biceps',
    secondary_muscles: '',
    description: `Stand around 30 - 40cm away from the cable, the feet are
     firmly on the floor. Take the bar and lift the weight with a fast movements.
     Lower the weight as with the dumbbell curls slowly and controlled.`,
    comments: `Don't move the elbows during the exercise`,
    gif: 'http://rs1074.pbsrc.com/albums/w415/cherokeehackslife/Workout%20Gifs/Bicep-Curl---Cables.gif~c200',
    video: ''
  },
  { id: 2,
    exercise: 'Biceps Curls With Barbell',
    category: 'Arms',
    primary_muscles: 'Biceps',
    secondary_muscles: '',
    description: `Hold the Barbell shoulder-wide, the back is straight, the shoulders
     slightly back, the arms are streched. Bend the arms, bringing the weight up, with a
      fast movement. Without pausing, let down the bar with a slow and controlled movement.
    Don't allow your body to swing during the exercise, all work is done by the biceps,
     which are the only mucles that should move (pay attention to the elbows).`,
    comments: `Keep your upper body straight.
    Fluid movements with no pauses at the top or the bottom`,
    gif: 'https://i.makeagif.com/media/11-07-2015/P7PT43.gif',
    video: ''
  },
  { id: 3,
    exercise: 'Hammercurls',
    category: 'Arms',
    primary_muscles: 'Biceps',
    secondary_muscles: '',
    description: `Hold two dumbbells and sit on a bench with a straight back,
     the shoulders are slightly rolled backwards. Your pals point to your
      body. Bend the arms and bring the weight up with a fast movement.
       Don't rotate your hands, as with the curls. Without any pause bring 
       the dumbbell down with a slow, controlled movement.
    Don't swing your body during the exercise, the biceps should 
    do all the work here. The elbows are at your side and don't move.`,
    comments: `Keep the elbows right next to the body and don't move them`,
    gif: 'https://thumbs.gfycat.com/AlarmingVeneratedFawn-small.gif',
    video: ''
  },
  { id: 4,
    exercise: 'Dips',
    category: 'Arms',
    primary_muscles: 'Triceps',
    secondary_muscles: 'Chest , Abs',
    description: `Hold onto the bars at a narrow place (if they are not
       parallel) and press yourself up, but don't stretch the arms completely,
        so the muscles stay during the whole exercise under tension. 
        Now bend the arms and go down as much as you can, keeping the elbows 
        always pointing back, 
    At this point, you can make a short pause before repeating the movement.`,
    comments: `Don't stretch your amrs completly`,
    gif: 'https://thumbs.gfycat.com/ConstantAlertHackee-small.gif',
    video: ''
  },
  { id: 5,
    exercise: 'Dips Between Two Benches',
    category: 'Arms',
    primary_muscles: 'Triceps',
    secondary_muscles: '',
    description: `Put two benches so far appart, that you can hold 
    onto one with your hands and are just able to reach the other with
     your feet. The legs stay during the exercise completely stretched.
      With your elbows facing back, bend them 
    as much as you can. Push yourself up, but don't stretch out the arms.`,
    comments: `Don't stretch your arms completly.
    The elbows always point back, don't let them open sidewards`,
    gif: 'https://thumbs.gfycat.com/AnxiousIncredibleBison-small.gif',
    video: ''
  },
  { id: 6,
    exercise: 'Push Ups',
    category: 'Arms',
    primary_muscles: 'Triceps',
    secondary_muscles: 'Chest, Abs',
    description: `Start with your body streched, your hands 
    are shoulder-wide appart on the ground. Push yourself off 
    the ground till you strech your arms. The back is always straight
     and as well as the neck (always look to the ground).
     Lower yourself to the initial position and repeat.`,
    comments: `Keep your body straight.
    Go as low as you can`,
    gif: 'https://thumbs.gfycat.com/ConventionalMajesticHusky-max-1mb.gif',
    video: ''
  },
  { id: 7,
    exercise: 'Preacher Curls',
    category: 'Arms',
    primary_muscles: 'Biceps',
    secondary_muscles: '',
    description: `Place the EZ curl bar on the rest handles in 
    front of the preacher bench. Lean over the bench and grab the
     EZ curl bar with palms up. Sit down on the preacher bench seat 
     so your upper arms rest on top of the pad and your chest is pressed 
     against the pad. Lower the weight until your elbows are extended and
      arms are straight. Bring the 
    weights back up to the starting point by contracting biceps. Repeat`,
    comments: ``,
    gif: 'https://fitnesspointt.files.wordpress.com/2014/08/preacher-curls-barbell.gif',
    video: ''
  },
  { id: 8,
    exercise: 'Barbell Close Grip Bench Press',
    category: 'Arms',
    primary_muscles: 'Triceps',
    secondary_muscles: 'Chest',
    description: `Lie on bench and grasp barbell from rack with shoulder width grip
    Lower weight to chest with elbows close to body. Push barbell back up until arms 
    are straight. Repeat.`,
    comments: `Grip can be slightly narrower than shoulder width but not too close.`,
    gif: 'https://thumbs.gfycat.com/OrdinarySpryChrysalis-max-1mb.gif',
    video: ''
  },
  ////    CHEST   \\\\
  { id: 9,
    exercise: 'Bench Press',
    category: 'Chest',
    primary_muscles: 'Chest',
    secondary_muscles: 'Biceps',
    description: `Lay down on a bench, the bar should be directly above
     your eyes, the knees are somewhat angled and the feet are firmly on
      the floor. Concentrate, breath deeply and grab the bar more than 
      shoulder wide. Bring it slowly down till it briefly touches your
       chest at the height of your nipples. Push the bar up.
    If you train with a high weight it is advisable to have a spotter
     that can help you up if you can't lift the weight on your own.
    With the width of the grip you can also control which part of 
    the chest is trained more:`,
    comments: `Don't stretch your arms completly`,
    gif: 'https://i.makeagif.com/media/9-21-2015/UV5LiJ.gif',
    video: ''
  },
  { id: 10,
    exercise: 'Butterfly',
    category: 'Chest',
    primary_muscles: 'Chest',
    secondary_muscles: 'Shoulder',
    description: `Sit on the butterfly machine, the feet have 
    a good contact with the floor, the upper arms are parallel
     to the floor. Press your arms together till the handles are
      practically together (but aren't!).
     Go slowly back. The weights should stay all the time in the air.`,
    comments: ``,
    gif: '',
    video: ''
  },
  { id: 11,
    exercise: 'Benchpress With Dumbbells',
    category: 'Chest',
    primary_muscles: 'Chest',
    secondary_muscles: 'Shoulders, Triceps',
    description: `The movement is very similar to
     benchpressing with a barbell, however, the weight
      is brought down to the chest at a lower point.
    Hold two dumbbells and lay down on a bench. Hold the 
    weights next to the chest, at the height of your nipples
     and press them up till the arms are
     stretched. Let the weight slowly and controlled down.`,
    comments: ``,
    gif: '',
    video: ''
  },
  { id: 12,
    exercise: 'Biceps Curl With Cable',
    category: 'Arms',
    primary_muscles: '',
    secondary_muscles: '',
    description: ``,
    comments: ``,
    gif: '',
    video: ''
  },
  { id: 13,
    exercise: 'Biceps Curl With Cable',
    category: 'Arms',
    primary_muscles: '',
    secondary_muscles: '',
    description: ``,
    comments: ``,
    gif: '',
    video: ''
  },
  /// Shoulders \\\
  { id: 14,
    exercise: 'Shoulder Press With Dumbbells',
    category: 'Shoulders',
    primary_muscles: 'Shoulders',
    secondary_muscles: '',
    description: `Sit on a bench, the back rest should be almost
     vertical. Take two dumbbells and bring them up to shoulder 
     height, the palms and the elbows point during the whole exercise 
     to the front. Press the weights up, at the highest
     point they come very near but don't touch. Go slowly down and repeat.`,
    comments: ``,
    gif: 'https://thumbs.gfycat.com/PeacefulFastAmericanalligator-small.gif',
    video: ''
  },
  { id: 15,
    exercise: 'Biceps Curl With Cable',
    category: 'Arms',
    primary_muscles: '',
    secondary_muscles: '',
    description: ``,
    comments: ``,
    gif: '',
    video: ''
  },
  { id: 16,
    exercise: 'Biceps Curl With Cable',
    category: 'Arms',
    primary_muscles: '',
    secondary_muscles: '',
    description: ``,
    comments: ``,
    gif: '',
    video: ''
  },
  { id: 17,
    exercise: 'Biceps Curl With Cable',
    category: 'Arms',
    primary_muscles: '',
    secondary_muscles: '',
    description: ``,
    comments: ``,
    gif: '',
    video: ''
  },
  { id: 18,
    exercise: 'Biceps Curl With Cable',
    category: 'Arms',
    primary_muscles: '',
    secondary_muscles: '',
    description: ``,
    comments: ``,
    gif: '',
    video: ''
  },
  { id: 19,
    exercise: 'Biceps Curl With Cable',
    category: 'Arms',
    primary_muscles: '',
    secondary_muscles: '',
    description: ``,
    comments: ``,
    gif: '',
    video: ''
  },
  /// BACK \\\
  { id: 20,
    exercise: 'Biceps Curl With Cable',
    category: 'Back',
    primary_muscles: 'Latissimus, Trapezius',
    secondary_muscles: 'Shoulders, Biceps',
    description: `Grab the pull up bar with a wide grip,
     the body is hanging freely. Keep your chest out and pull
      yourself up till your chin reaches the bar or it touches
       your neck, if you want to pull behind you. Go with a 
    slow and controlled movement down, always keeping the chest out.`,
    comments: `Keep your head up.
    Keep your chest out.
    The elbows always point back, don't let them open sidewards`,
    gif: 'https://thumbs.gfycat.com/BiodegradableDistantFreshwatereel-small.gif',
    video: ''
  },
  { id: 21,
    exercise: 'Biceps Curl With Cable',
    category: 'Arms',
    primary_muscles: '',
    secondary_muscles: '',
    description: ``,
    comments: ``,
    gif: '',
    video: ''
  },
  { id: 22,
    exercise: 'Biceps Curl With Cable',
    category: 'Arms',
    primary_muscles: '',
    secondary_muscles: '',
    description: ``,
    comments: ``,
    gif: '',
    video: ''
  },
  { id: 23,
    exercise: 'Biceps Curl With Cable',
    category: 'Arms',
    primary_muscles: '',
    secondary_muscles: '',
    description: ``,
    comments: ``,
    gif: '',
    video: ''
  },
  { id: 24,
    exercise: 'Biceps Curl With Cable',
    category: 'Arms',
    primary_muscles: '',
    secondary_muscles: '',
    description: ``,
    comments: ``,
    gif: '',
    video: ''
  },
  { id: 25,
    exercise: 'Biceps Curl With Cable',
    category: 'Arms',
    primary_muscles: '',
    secondary_muscles: '',
    description: ``,
    comments: ``,
    gif: '',
    video: ''
  },
/// LEGS \\\
  { id: 26,
    exercise: 'Front Squats',
    category: 'Legs',
    primary_muscles: 'Gluteus maximus',
    secondary_muscles: 'Abs',
    description: `Begin with the barbell across the front
     side of your shoulders. Place your fingertips under the 
     barbell just outside of your shoulders and drive your elbows up.
      Keeping your chest up and core tight, bend at your hips and knees
       to lower
     into a squat until your thighs are parallel to the ground.`,
    comments: ``,
    gif: 'https://cerin.files.wordpress.com/2011/01/front-squat-good-pov.gif',
    video: ''
  },
  { id: 27,
    exercise: 'Back Squats',
    category: 'Legs',
    primary_muscles: 'Gluteus maximus',
    secondary_muscles: '',
    description: `Stand with the bar on your upper-back, 
    and your feet shoulder-width apart. Squat down by pushing your
     knees to the side while moving hips back. Break parallel by 
     Squatting down until your hips are lower than your knees.
     Squat back up while keeping your knees out and chest up`,
    comments: ``,
    gif: 'https://thumbs.gfycat.com/PepperyScrawnyBurro-small.gif',
    video: ''
  },
  { id: 28,
    exercise: 'Biceps Curl With Cable',
    category: 'Arms',
    primary_muscles: '',
    secondary_muscles: '',
    description: ``,
    comments: ``,
    gif: '',
    video: ''
  },
  { id: 29,
    exercise: 'Biceps Curl With Cable',
    category: 'Arms',
    primary_muscles: '',
    secondary_muscles: '',
    description: ``,
    comments: ``,
    gif: '',
    video: ''
  },
  { id: 30,
    exercise: 'Biceps Curl With Cable',
    category: 'Arms',
    primary_muscles: '',
    secondary_muscles: '',
    description: ``,
    comments: ``,
    gif: '',
    video: ''
  },
  { id: 31,
    exercise: 'Biceps Curl With Cable',
    category: 'Arms',
    primary_muscles: '',
    secondary_muscles: '',
    description: ``,
    comments: ``,
    gif: '',
    video: ''
  },
  { id: 32,
    exercise: 'Biceps Curl With Cable',
    category: 'Arms',
    primary_muscles: '',
    secondary_muscles: '',
    description: ``,
    comments: ``,
    gif: '',
    video: ''
  },
  { id: 33,
    exercise: 'Biceps Curl With Cable',
    category: 'Arms',
    primary_muscles: '',
    secondary_muscles: '',
    description: ``,
    comments: ``,
    gif: '',
    video: ''
  },
  { id: 34,
    exercise: 'Biceps Curl With Cable',
    category: 'Arms',
    primary_muscles: '',
    secondary_muscles: '',
    description: ``,
    comments: ``,
    gif: '',
    video: ''
  },
  { id: 35,
    exercise: 'Biceps Curl With Cable',
    category: 'Arms',
    primary_muscles: '',
    secondary_muscles: '',
    description: ``,
    comments: ``,
    gif: '',
    video: ''
  },
  { id: 36,
    exercise: 'Biceps Curl With Cable',
    category: 'Arms',
    primary_muscles: '',
    secondary_muscles: '',
    description: ``,
    comments: ``,
    gif: '',
    video: ''
  },
  { id: 37,
    exercise: 'Biceps Curl With Cable',
    category: 'Arms',
    primary_muscles: '',
    secondary_muscles: '',
    description: ``,
    comments: ``,
    gif: '',
    video: ''
  },
  { id: 38,
    exercise: 'Biceps Curl With Cable',
    category: 'Arms',
    primary_muscles: '',
    secondary_muscles: '',
    description: ``,
    comments: ``,
    gif: '',
    video: ''
  },
  { id: 39,
    exercise: 'Biceps Curl With Cable',
    category: 'Arms',
    primary_muscles: '',
    secondary_muscles: '',
    description: ``,
    comments: ``,
    gif: '',
    video: ''
  },
  { id: 40,
    exercise: 'Biceps Curl With Cable',
    category: 'Arms',
    primary_muscles: '',
    secondary_muscles: '',
    description: ``,
    comments: ``,
    gif: '',
    video: ''
  },
  { id: 41,
    exercise: 'Biceps Curl With Cable',
    category: 'Arms',
    primary_muscles: '',
    secondary_muscles: '',
    description: ``,
    comments: ``,
    gif: '',
    video: ''
  },
  { id: 42,
    exercise: 'Biceps Curl With Cable',
    category: 'Arms',
    primary_muscles: '',
    secondary_muscles: '',
    description: ``,
    comments: ``,
    gif: '',
    video: ''
  },
  { id: 43,
    exercise: 'Biceps Curl With Cable',
    category: 'Arms',
    primary_muscles: '',
    secondary_muscles: '',
    description: ``,
    comments: ``,
    gif: '',
    video: ''
  },
  { id: 44,
    exercise: 'Biceps Curl With Cable',
    category: 'Arms',
    primary_muscles: '',
    secondary_muscles: '',
    description: ``,
    comments: ``,
    gif: '',
    video: ''
  }
]



// Data which we get from API :

// {
//   "id": 405,
//   "license_author": "Mikko Ruohola",
//   "status": "2",
//   "description": "<p>Put barbell on the back of your shoulders. Stand upright, then take the first step forward. Step should bring you forward so that your supporting legs knee can touch the floor. Then stand back up and repeat with the other leg.</p>\n<p>Remember to keep good posture.</p>",
//   "name": "Barbell Lunges",
//   "name_original": "Barbell Lunges",
//   "creation_date": "2016-07-30",
//   "uuid": "ae6a6c23-4616-49b7-a152-49d7461c2b7f",
//   "license": 2,
//   "category": 9,
//   "language": 2,
//   "muscles": [
//       10
//   ],
//   "muscles_secondary": [
//       8
//   ],
//   "equipment": [
//       1
//   ]
// }

////////////////////////////////////////////

// example of own Database:

// {
//   id: 1,
//   video: 'www.haha.de',
//   gif: 'haha',
//   exercise_id: 405
// }

// Connect data with our own database ( video, GIF):

// - We only need the GIF and Video if user clicks
// on exercise

// -the list where all the exercises are coming from 
// is from the API which we use.

// -when the user clicks the exercise we could save the ID from 
// that exercise (the exercise has a ID from the data we getting from the API)

// -when we make our own table with gifs and videos and saving 
// the exercise_id ( connecting the id from the data which we get from the API)
// we could make a get request with the saved id from our own database and should
// be so able to can display the data from the api and the gifs and video

// Result:

// - we must add the exercise_id ourselves on our own database for videos and gifs 
//  for every exercise