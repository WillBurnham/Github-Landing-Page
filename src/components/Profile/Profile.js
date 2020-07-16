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
                            <a href={html_url}>
                                <h2>{user}</h2>
                            </a>
                        </div>
                    </div>
                </center>
                <center>
                    <div className="centered-menu">
                        <div className="row">
                            <div className="col-xs">
                                <i className="fa fa-map-pin"/>
                            </div>
                            <div className="col-xs">
                                <p>{location}</p>
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
