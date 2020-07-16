import React, { Component } from 'react'
import './RepoList.css'
import "@fortawesome/fontawesome-free/css/all.min.css"

export default class RepoList extends Component {
    render() {
        const {repos} = this.props;
        let columns = []
        let rows = []
        repos.forEach((repo, idx) => {
            columns.push(
                <div className="col-sm">
                    <a href={repo.html_url} target="_blank">
                        <div className="repo-name">
                            <div className="repo-icon">
                                <i className="fa fa-folder-open"/>
                            </div>
                            <div className="repo-title">
                                <h4>{repo.name}</h4>
                            </div>
                        </div>
                        <div className="repo-description">
                            <p>{repo.description}</p>
                        </div>
                        <div className="repo-footer">
                            <div className="footer-container">
                                <div className="footer-item-left">
                                    <p>{repo.language}</p>
                                </div>
                                <div className="footer-item-right">
                                    <div className="star-count">
                                        <i className="fa fa-star"></i>
                                    </div>
                                    <div className="star-count">
                                        <p>{repo.stargazers_count}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            )
            if ((idx+1)%4===0) {columns.push(<div className="w-100"></div>)}
        })
        return (
            <center>
                <div className="row">
                    {columns}
                </div>
            </center>
        )
    }
}
