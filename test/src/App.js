import React from 'react';
import CreateWorkout from './components/createWorkout';
import CircleChart from './components/CircleChart';
import Difficulty from './components/Difficulty';
import RadialChart from './components/PercentageCircle';
// import Calendar from './components/Calendar';
import NewCalendar from './components/NewCalendar';
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
  <CreateWorkout/>
  {/* <CircleChart/>
  <RadialChart/> */}
  {/* <Calendar/> */}
  {/* <NewCalendar/> */}
</div>
     )
  }
}


export default App;