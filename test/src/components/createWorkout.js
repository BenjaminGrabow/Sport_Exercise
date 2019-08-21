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
};

showCategory = e => {
  this.props.showCategory(e.target.textContent);
};

  render() { 
    // add font awesome !!!
  
    if (this.props.singleExercise) {
      return (
        <div>
          <div className="close"
          onClick={this.props.closeExercise}><i class="fa fa-window-close"/></div>
           <p>{this.props.byId[0].exercise}</p>
           <p>{this.props.byId[0].description}</p>
          <img src={this.props.byId[0].gif} alt="alt"/>
        </div>
      )
    }

    return ( 
<div>
  <div className="categories">
  <button onClick={this.showCategory}>Arms</button>
 <button onClick={this.showCategory}>Chest</button>
  <button onClick={this.showCategory}>Back</button>
  <button onClick={this.showCategory}>Legs</button>
 <button onClick={this.showCategory}>Shoulders</button>  
 </div>
 {/* // we could make categories in array and mapping over because of DRY code */}

     { this.props.exercises ? ( this.props.exercises.map((exer, index) => {
      return <div key={index}>
        <p
        onClick={() => this.props.getById(exer.id)}>{exer.exercise}</p>
        <button>Add</button> 
        {/* // add onClick for adding exercise to workout  */}
     
        </div>
    })) : null }

        { this.props.pageNumbers ? ( this.props.pageNumbers.map((num, index) => {
      return <button key={index} 
      onClick={() => this.props.paginate(num)}>
      {num}
      </button>
    })) : null }

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