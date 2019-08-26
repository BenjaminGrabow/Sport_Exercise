import React from 'react';
import { connect } from 'react-redux';
import { start, showCategory, closeExercise, paginate, getExercise } from '../Store/actions';

class CreateWorkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount = () => {
    this.props.start();

    setTimeout(() => this.props.showCategory('Chest'), 1000);// That we dont see all exercises at the start
  };

  showCategory = e => {
    this.props.showCategory(e.target.textContent);
  };

  render() {

    // SINGLE-EXERCISE VIEW
    if (this.props.singleExercise) {
      return (
        <div>
          <div className="close"
            onClick={this.props.closeExercise}><i class="fa fa-window-close" /></div>
          <p>{this.props.byId[0].exercise_name}</p>
          <p>{this.props.byId[0].exercise_ratings}</p>
          <p>{this.props.byId[0].description}</p>
          <p>{this.props.byId[0].difficulty}</p>
          <img src={this.props.byId[0].picture_one} alt="" />
          <img src={this.props.byId[0].picture_two} alt="" />
          <p>{this.props.byId[0].type}</p>
          <p>{this.props.byId[0].muscle}</p>
          <p>{this.props.byId[0].equipment}</p>
          <video width="320" height="240" controls>
  <source src={this.props.byId[0].video} type="video/mp4" />
Your browser does not support the video tag.
</video>
        </div>
      )
    }

    return (
      // NAVIGATION IS HERE
      <div className="create-workout">
{/* // LEFT SIDE OF THE PAGE WHERE THE EXERCISE LIBRARY IS */}
      <div className="exercise-library">
        <div className="categories">
          {['Chest', 'Quadriceps', 'Lats', 'Lower Back', 'Hamstrings',
'Calves', 'Triceps', 'Traps', 'Shoulders', 'Abdominals',
'Glutes', 'Biceps', "Adductors", "Abductors"]
          .map((category, index) =>
           <button  key={index} onClick={this.showCategory}>{category}</button>)}
        </div>

        {this.props.exercises ? (this.props.exercises.map((exer, index) => {
          return <div key={index}>
            <p
              onClick={() => this.props.getById(exer.id)}>{exer.exercise}</p>
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

export default connect(mapStateToProps, { start, showCategory, closeExercise, paginate, getExercise })(CreateWorkout);

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
//         onClick={() => this.props.getById(exer.id)}>{exer.exercise}</p>
//       </div>
//     })) : null }
// </div>