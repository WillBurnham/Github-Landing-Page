import React, { Component } from 'react'
import {Bar} from 'react-chartjs-2';

const state = {
    labels: ['Python', 'Flask', 'Javascript', 'React', 'C++',
             'mySQL', 'Git'],
    datasets: [
      {
        backgroundColor: ['#24b3e3', 'yellow', '#F0DB4F', 'red', '#141614', 'green'],
        borderColor: 'black',
        borderWidth: 2,
        data: [ 5, 3.75, 3, 3, 3.75, 1.5, 3]
      }
    ]
  }

var chartOptions = {
    tooltips: {enabled: false},
    hover: {mode: null},
    title: {
        display: false,
    },

    legend: {
        display: false,
    },
    scales: {
      yAxes: [{
        display: true,
        scaleLabel: {
            show: true
        },
        ticks: {
            beginAtZero:true,
			stepSize: 1.5,
			fontColor:"#8f9092",
            callback:function(value) { 
                var x = ["Beginner", "Somewhat Familiar", "Intermediate", "Intermediate", "Very Familiar", "Very Familiar", "Advanced"];
                return x[value | 0];                  
            }
        }
        }]
     }
}

export default class BarChart extends Component {
    render() {
        return (
            <Bar
                data={state}
                options={
                    chartOptions
                }
            />
        )
    }
}
