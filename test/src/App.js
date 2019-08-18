import React from 'react';
import { connect } from 'react-redux';
import { start, getById } from './Store/actions';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  componentDidMount = () => {
 this.props.start();
};
  
  render() { 

    if (this.props.byId) {
      return (
        <div>
           <p>{this.props.byId.exercise}</p>
           <p>{this.props.byId.description}</p>
          <img src={this.props.byId[0].gif} alt="alt"/>
          
        </div>
      )
    }

    return ( 
     this.props.exercise ? ( this.props.exercise.map(exer => {
      return <div>
        <p
        onClick={() => this.props.getById(exer.id)}>{exer.exercise}</p>
      </div>
    })) : null
     )
  }
}

const mapStateToProps = state => {
  return {
    exercise: state.exercise,
    byId: state.byId
  };
};
 
export default connect(mapStateToProps, { start, getById })(App);
