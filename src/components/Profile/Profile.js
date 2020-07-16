import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import './Profile.css'
import "@fortawesome/fontawesome-free/css/all.min.css"

export default class Profile extends Component {
    render() {
        const {img, user, bio, location, id, followers, following, num_repos, html_url, repos} = this.props;
        return (
            <section className="page-container">
                <img src={img}/>
                <center>
                    <div className="row">
                        <div className="col-md-12">
                            <a href={html_url} target="_blank">
                                <h2>{user}</h2>
                            </a>
                        </div>
                    </div>
                </center>
                <center>
                    <div className="row align-items-start">
                        <div className="col-lg-6">
                            <div className="location">
                                <p>{location}</p>
                            </div>
                            <div className="location-icon">
                                <i className="fa fa-map-pin"/>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="website-icon">
                                <i className="fa fa-share-alt"/>
                            </div>
                            <div className="website">
                                <p><a href="https://Wburnham.herokuapp.com" target="_blank">
                                    Wburnham.herokuapp.com
                                </a></p>
                            </div>
                        </div>
                    </div>
                </center>
                <center>
                    <div className="bio">
                        <p>{bio}</p>
                    </div>
                </center>
                <center>
                    <div className="repoHeader">
                        <h1>Repositories</h1>
                    </div>
                </center>
            </section> 
        )
    }
}
