import React from 'react';
import CreateWorkout from './components/createWorkout';
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
</div>
     )
  }
}


export default App;