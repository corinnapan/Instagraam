import React, { Component } from 'react';
import './App.css';
import Axios from 'axios'
import Stream from './components/Stream'
import Header from './components/Header'
import Home from './components/Home'
import UserPage from './components/UserPage'
import NoMatch from './components/NoMatch'
import About from './components/About'
import { Route, Switch } from 'react-router-dom'

const API_KEY = process.env.REACT_APP_UNSPLASH_API_KEY



console.log(API_KEY);


class App extends Component {
  constructor() {
    super();
    this.state = {
      photos: []

    }


  }
  // https://api.unsplash.com/users/?client_id=YOUR_ACCESS_KEY
  //(`https://api.unsplash.com/users/harleydavidson/photos?client_id=${POTATO}`)

  // https://api.unsplash.com/users/?client_id=YOUR_ACCESS_KEY
  //(`https://api.unsplash.com/users/harleydavidson/photos?client_id=${POTATO}&page=1&order_by=latests`)


  // 

  //first api call render all the photos with info
  async componentDidMount() {
    const response = await Axios.get(`https://api.unsplash.com/photos?client_id=${API_KEY}`)
    console.log(response);

    this.setState({
      photos: response.data
    })
  }
  render() {
    console.log('app.js this.state.photos', this.state.photos)
    return (
      // <div className="App">
      //   <Stream photoData={this.state.photos}/>

      // </div>
      <>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            path="/stream"
            render={
              (routerProps) =>
                <Stream
                  photoData={this.state.photos}
                  {...routerProps} />}
          />
          <Route
            exact path="/users/:userid"
            render={
              (routerProps) =>
                <UserPage
                  {...routerProps} />}
          />
          <Route
            path="/about"
            component={About}
          />
          <Route
            path={"*"}
            component={NoMatch}
          />



        </Switch>

      </>

    )
  }
}

export default App;

    //why is it a better idea to pass the data down first before mapping through it?

    //i want user to see stream of photos, then i need to display photos of username
    //username, user photo, heart shape, comment box, 

    //instascript, instagraph - caption me (text box below each photo)
    //when user clicks on username at bottom, is directed to profile, # of posts, followers
