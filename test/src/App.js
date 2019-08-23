import React from 'react';
import CreateWorkout from './components/createWorkout';
import CircleChart from './components/CircleChart';
import RadialChart from './components/PercentageCircle';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
     }
  }
  
  render() {
    return ( 
<div>
  {/* <CreateWorkout/> */}
  <CircleChart/>
  <RadialChart/>
</div>
     )
  }
}


export default App;