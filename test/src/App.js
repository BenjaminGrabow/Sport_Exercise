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
           <p>{this.props.byId[0].exercise}</p>
           <p>{this.props.byId[0].description}</p>
          <img src={this.props.byId[0].gif} alt="alt"/>
          
        </div>
      )
    }

    return ( 
<div>
  <input type='checkbox' name='arms' checked={this.state.arms} onChange={this.onChange} />
  <input type='checkbox' name='chest' checked={this.state.chest} onChange={this.onChange} />
  <input type='checkbox' name='back' checked={this.state.back} onChange={this.onChange} />
  <input type='checkbox' name='legs' checked={this.state.legs} onChange={this.onChange} />
  <input type='checkbox' name='shoulders' checked={this.state.shoulders} onChange={this.onChange} />  
     { this.props.exercise ? ( this.props.exercise.map(exer => {
      return <div>
        <p
        onClick={() => this.props.getById(exer.id)}>{exer.exercise}</p>
      </div>
    })) : null }
</div>
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

