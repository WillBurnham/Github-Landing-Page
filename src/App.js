import React, { Component } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Profile from './components/Profile/Profile'
import RepoList from './components/RepoList/RepoList';
import Chart from './components/Chart/Chart'
import Footer from './components/Footer/Footer'

class App extends Component {
  state = {
    img:'',
    user:'',
    bio:'',
    location:'',
    id:'',
    followers: 0,
    following: 0,
    num_repos: 0,
    repos: []
  };
  async getProfileData() {
    console.log("Getting Profile Data")
    const profile_url = "https://api.github.com/users/WillBurnham";
    const repos_url = "https://api.github.com/users/WillBurnham/repos";
    const response = await fetch(profile_url);
    const result = await response.json();
    const response2 = await fetch(repos_url);
    const result2 = await response2.json();
    this.setState({
      img: result.avatar_url,
      user: "@" + result.login,
      bio: result.bio,
      location: result.location,
      id: result.id,
      followers: result.followers,
      following: result.following,
      num_repos: result.public_repos,
      html_url: result.html_url,
      repos: result2
    });
  }
  componentWillMount() {
    this.getProfileData();
  }
  render() {
    const {img, user, bio, location, id, followers, following, num_repos, html_url, repos} = this.state;
    return (
      <section className="upper">
        <section className="head">
          <Profile
            key={id}
            img={img}
            user={user}
            bio={bio}
            location={location}
            followers={followers}
            following={following}
            num_repos={num_repos}
            html_url={html_url}
            repos={repos}
          ></Profile>
        </section>
        <section className="lower">
          <RepoList
            key={id}
            repos={repos}
          ></RepoList>
        </section>
        <section className="chart-sect">
          <Chart></Chart>
        </section>
        <section>
          <Footer></Footer>
        </section>
      </section>
    );
  }
}

export default App;
