import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class Stream extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    console.log(this.props)
    const photos = this.props.photoData.length !== 0 && this.props.photoData.map((objectPhoto, index) => {
      return (
        <>
          <div className="wrapper">
            <div className="usernameTopWrapper">
              <img className="profileimage"
              src={objectPhoto.user.profile_image.medium}
              />
              <p>
                {objectPhoto.user.username}
              </p>
            </div>
            <div className="actualImages">
              <Link to={`/users/${objectPhoto.user.username}`}>
                <img
                  key={index}
                  src={objectPhoto.urls.raw}
                />
              </Link>
            </div>
          </div>
        </>
      )
    })
    return (
      <>
        <div className="imagestream">
          {photos}
        </div>
      </>
    )
  }
}
export default Stream; 