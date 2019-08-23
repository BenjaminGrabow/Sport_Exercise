import React from 'react';
import ReactApexChart from 'react-apexcharts';

const actualYear = new Date().getFullYear();

const actualMonth = new Date().getMonth() + 1;



// Calculate number of Day in current Month
const actualDaysInMonth = new Date(actualYear, actualMonth, 0).getDate()

// ____________________________________________________________________________________

// FIRST DAY AND LAST DAY OF YEAR

const myDays=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];

const firstDayOfYear = new Date(actualYear, 0,1);
const lastDayOfYear = new Date(actualYear, 12,0);


const firstDay = myDays[firstDayOfYear.getDay()];

const lastDay = myDays[lastDayOfYear.getDay()];


// ________________________________________________________________________________________

// Calculate Number of days in year
function days_of_a_year(year) 
{
   
  return isLeapYear(year) ? 366 : 365;
}

function isLeapYear(year) {
     return year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0);
}

const numberOfDaysInYear = days_of_a_year(actualYear);


// _____________________________________________

// NOW WE HAVE NUMBER OF DAYS IN YEAR AND FIRST AND LAST DAY

//2019

const days = ["Monday", "Tuesday", "Wednesday","Thursday","Friday","Saturday","Sunday"];

console.log(days.indexOf(firstDay))
let daysForYear = [];
let waitTillEndOfYear = 0;
let trackNumberOfDays = 0;

while(waitTillEndOfYear !== numberOfDaysInYear ) {
waitTillEndOfYear++;

if(!daysForYear[0]){

daysForYear.push(days[days.indexOf(firstDay)]);

trackNumberOfDays = days.indexOf(firstDay);

} else if(trackNumberOfDays === 6) {

  daysForYear.push(days[trackNumberOfDays]);

  trackNumberOfDays = 0;
} else {

    daysForYear.push(days[trackNumberOfDays]);

    trackNumberOfDays++;
}
}

function generateData(count, yrange) {
  var i = 0;
  var series = [];
  while (i < count) {
    var x = (i + 1).toString();
    var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

    series.push({
      x: x,
      y: y
    });
    i++;
  }
  return series;
}

var data = [{
    name: 'Monday',
    data: generateData(8, {
      min: 0,
      max: 90
    })
  },
  {
    name: 'Tuesday',
    data: generateData(8, {
      min: 0,
      max: 90
    })
  },
  {
    name: 'Wednesday',
    data: generateData(8, {
      min: 0,
      max: 90
    })
  },
  {
    name: 'Thursday',
    data: generateData(8, {
      min: 0,
      max: 90
    })
  },
  {
    name: 'Friday',
    data: generateData(8, {
      min: 0,
      max: 90
    })
  },
  {
    name: 'Saturday',
    data: generateData(8, {
      min: 0,
      max: 90
    })
  },
  {
    name: 'Sunday',
    data: generateData(8, {
      min: 0,
      max: 90
    })
  },
]

data.reverse()

var colors = ["#F3B415", "#F27036", "#663F59", "#6A6E94", "#4E88B4", "#00A7C6", "#18D8D8", '#A9D794', '#46AF78',
  '#A93F55', '#8C5E58', '#2176FF', '#33A1FD', '#7A918D', '#BAFF29'
]

colors.reverse()

class HeatmapChart extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      options: {
        dataLabels: {
          enabled: false
        },
        colors: colors,
        xaxis: {
          type: 'category',
          categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
        },
        title: {
          text: 'HeatMap Chart (Different color shades for each series)'
        },
        grid: {
          padding: {
            right: 20
          }
        }
      },
      series: data,
    }
  }

  render() {
    return (
      

      <div id="chart">
        <ReactApexChart onClick={(e) => console.log(e.target)} options={this.state.options} series={this.state.series} type="heatmap" height="450" />
      </div>


    );
  }
}

export default HeatmapChart;