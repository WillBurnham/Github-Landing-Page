import React, { Component } from 'react'
import './Footer.css'
export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <center>
                    <p>Built with 
                        <a href="https://reactjs.org/"><span className="footer-highlight"> React.js</span></a>
                        <span className="footer-highlight"> - </span>
                        <a href="https://chartjs.org/"><span className="footer-highlight">Chart.js</span></a>
                        <span className="footer-highlight"> - </span>
                        <a href="https://getbootstrap.com/"><span className="footer-highlight">Bootstrap</span></a>
                        <span className="footer-highlight"> - </span>
                        <a href="https://developer.github.com/v3/"><span className="footer-highlight">Github API </span></a>
                          by Will Burnham</p>
                </center>
            </div>
        )
    }
}
