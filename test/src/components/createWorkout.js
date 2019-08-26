import React from 'react';
import Difficulty from './Difficulty';
import { connect } from 'react-redux';
import { fetchExercises, showCategory, closeExercise, paginate, getExercise, searchExercise } from '../Store/actions';

class CreateWorkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchForName: '',
    }
  }

  componentDidMount = () => {
    this.props.fetchExercises();

    setTimeout(() => this.props.showCategory('Chest'), 1000);// That we dont see all exercises at the start
  };

  handleChange = (e) => {

    this.setState({
      searchForName: e.target.value,
    });
  };

  searchForName = () => {
  this.props.searchExercise(this.state.searchForName);

  this.setState({
    searchForName: '',
  });
  };

  showCategory = e => {
    this.props.showCategory(e.target.textContent);
  };

  render() {
    
    const muscles = ['Chest', 'Forearms', 'Quadriceps', "Middle Back", 
    'Lats', 'Lower Back', 'Neck', 'Hamstrings',
    'Calves', 'Triceps', 'Traps', 'Shoulders', 'Abdominals',
    'Glutes', 'Biceps', "Adductors", "Abductors"];
    
    // SINGLE-EXERCISE VIEW
    if (this.props.singleExercise) {
      const singleExercise = this.props.singleExercise[0];

      return (
        <div>
          <div className="close"
            onClick={this.props.closeExercise}><i class="fa fa-window-close" /></div>
          <p>{singleExercise.exercise_name}</p>
  <Difficulty difficulty={Number(singleExercise.exercise_ratings.split('.').join(''))}/>
          <p>{singleExercise.description}</p>
          <p>{singleExercise.difficulty}</p>
          <img src={singleExercise.picture_one} alt="" />
          <img src={singleExercise.picture_two} alt="" />
          <p>{singleExercise.type}</p>
          <p>{singleExercise.muscle}</p>
          <p>{singleExercise.equipment}</p>
          <video width="320" height="240" controls>
  <source src={singleExercise.video} type="video/mp4" />
Your browser does not support the video tag.
</video>
        </div>
      )
    }

//Multi-Exercises-View
    return (
      // NAVIGATION IS HERE
      <div className="create-workout">
{/* // LEFT SIDE OF THE PAGE WHERE THE EXERCISE LIBRARY IS */}
      <div className="exercise-library">
        <div className="categories">
          {muscles
          .map((category, index) =>
           <button  key={index} onClick={this.showCategory}>{category}</button>)}
        </div>
        
        <input value={this.state.searchForName} onChange={this.handleChange} placeholder="Search for Exercise" />
<button onClick={this.searchForName} >Search</button>

        {this.props.exercises ? (this.props.exercises.map((exercise, index) => {
          return <div key={index}>
            <p
              onClick={() => this.props.getExercise(exercise.id)}>{exercise.exercise_name}</p>
            <button>Add</button>
            {/* // add onClick for adding exercise to workout  */}

          </div>
        })) : null}

        {this.props.pageNumbers ? (this.props.pageNumbers.map((num, index) => {
          return <button key={index}
            onClick={() => this.props.paginate(num)}>
            {num}
          </button>
        })) : null}
      </div>

{/* // RIGHT SIDE WHERE YOU CAN CHOOSE THE CONFIGS FOR YOUR SESSION */}
<div className="workout-setting">


</div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    exercises: state.exercises,
    singleExercise: state.singleExercise,
    pageNumbers: state.pageNumbers,
  };
};

export default connect(mapStateToProps, { fetchExercises, showCategory, closeExercise, paginate, getExercise, searchExercise })(CreateWorkout);

// WITH CHECKBOX

// arms: '',
// legs: '',
// shoulders: '',
// back: '',
// chest: '',

// onChange = (e) => {
//   this.setState({
//     arms: false,
//     legs: false,
//     shoulders: false,
//     back: false,
//     chest: false,
//       });

//       this.searchCategory(e.target.name);
// };

// searchCategory = (category) => {
//   this.props.getByCategory(category);

//   this.setState({
// [category]: true
//   });
// };

// <div>
//   <input type='checkbox' name='arms'
//    checked={this.state.arms} onChange={this.onChange} /> Arms <br />
//   <input type='checkbox' name='chest'
//    checked={this.state.chest} onChange={this.onChange} /> Chest <br />
//   <input type='checkbox' name='back'
//    checked={this.state.back} onChange={this.onChange} /> Back <br />
//   <input type='checkbox' name='legs'
//    checked={this.state.legs} onChange={this.onChange} /> Legs <br />
//   <input type='checkbox' name='shoulders'
//    checked={this.state.shoulders} onChange={this.onChange} /> Shoulders <br />  
//      { this.props.exercise ? ( this.props.exercise.map((exer, index) => {
//       return <div key={index}>
//         <p
//         onClick={() => this.props.getsingleExercise(exer.id)}>{exer.exercise}</p>
//       </div>
//     })) : null }
// </div>