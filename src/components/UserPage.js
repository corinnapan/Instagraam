import React, { Component } from 'react'
import Axios from 'axios'
const API_KEY = process.env.REACT_APP_UNSPLASH_API_KEY


class UserPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData1: {},
      userPhotos1: []
    }
  }
  async componentDidMount() {
    let username = this.props.match.params.userid
    const userData = await Axios.get(`https://api.unsplash.com/users/${username}?client_id=${API_KEY}`)
    console.log(userData)

    const userPhotos = await Axios.get(`https://api.unsplash.com/users/${username}/photos?client_id=${API_KEY}`)
    console.log(userPhotos)

    this.setState({
      userData1: userData.data,
      userPhotos1: userPhotos.data

    })
  }


  render() {
    // console.log(this.props.match.params.userid)
    console.log(this.state.userData1)
    let { name, portfolio_url } = this.state.userData1 && this.state.userData1

    console.log(this.state.userPhotos1);
    let rightPhotos = this.state.userPhotos1.length !== 0 && this.state.userPhotos1.map((userPhoto, index) => {
      console.log(userPhoto.urls.raw)
      return (

        (index % 3 === 0 || index === 0) &&

        <img
          class="right-column"
          key={index}
          src={userPhoto.urls.raw}
        />
      )
    })
    let leftPhotos = this.state.userPhotos1.length !== 0 && this.state.userPhotos1.map((userPhoto, index) => {
      console.log(userPhoto.urls.raw)
      return (
        (index % 3 === 1 && index !== 0) &&
        <img
          class="left-column"
          key={index}
          src={userPhoto.urls.raw}
        />

      )
    })
    let middlePhotos = this.state.userPhotos1.length !== 0 && this.state.userPhotos1.map((userPhoto, index) => {
      console.log(userPhoto.urls.raw)
      return (
        (index % 3 === 2 && index !== 0) &&
        <img
          class="middle-column"
          key={index}
          src={userPhoto.urls.raw}
        />
      )
    })
    return (
      <div className='user-page'>
        <div className="user-name">
          <h2>{name}</h2>
          <h3>{portfolio_url}</h3>
           {this.state.userData1.profile_image &&
       
            <img 
            className="userProfileImage"
            src={this.state.userData1.profile_image.large}
            />
          }

        </div>

        <div className="user-photos">
          <div className="column">
            {leftPhotos}
          </div>
          <div className="column">
            {middlePhotos}
          </div>
          <div className="column">
            {rightPhotos}
          </div>
        </div>

      </div>

    )
  }
}
export default UserPage