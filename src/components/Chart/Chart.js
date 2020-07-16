import React from 'react';
import {Doughnut, Bar} from 'react-chartjs-2';
import './Chart.css'
import BarChart from './BarChart'

const state = {
  labels: ['Python', 'Javascript', 'C++'],
  datasets: [
    {
      backgroundColor: [
        '#4B8BBE',
        '#F0DB4F',
        '#141614',
        '#DE3423',
        '#6800B4'
      ],
      hoverBackgroundColor: [
        '#4B8BBE',
        '#F0DB4F',
        '#141614',
        '#DE3423',
        '#6800B4'
      ],
      data: [3, 2, 0, 0, 0]
    }
  ]
}

export default class Chart extends React.Component {
  render() {
    return (
      <div className="chart-container">
        <div className="row">
          <div className="col-md-6">
            <center>
              <div className="donut-header">
                <h4> Languages by Project </h4>
              </div>
            </center>
            <Doughnut
              data = {state}
              options={{
                title:{
                  display:true,
                  fontSize:20
                },
                legend:{
                  display:true,
                  position:'right'
                }
              }}
            ></Doughnut>
          </div>
          <div className="col-md-6">
            <center>
              <div className="donut-header">
                <h4> Familiarity by Technology </h4>
              </div>
              <BarChart/>
            </center>
          </div>
        </div>
      </div>
    );
  }
}