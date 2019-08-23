import React from 'react';
import Calendar from 'react-calendar'

class NewCalendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  handleChange = e => {
console.log(e.target)
  };

  render() { 
    return ( 
      <Calendar onChange={this.handleChange} /> 
     );
  }
}
 
export default NewCalendar;