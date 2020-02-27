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
        <div className="imagestream">
          <div className = "wrapper">
          <div className="usernameTopWrapper">
            <p>
              {objectPhoto.user.username}
            </p>
          </div>
         </div>
          <Link to={`/users/${objectPhoto.user.username}`}>
            
          <div className="actualImages">
            <img
              style={{ width: '400px' }}
              key={index}
              src={objectPhoto.urls.raw}
            />
            </div>
            
          </Link>
          
          <p>{objectPhoto.user.username}
          </p>
        </div>

      )

    })
    return (
      <>
        {photos}
      </>


    )

  }

}
export default Stream; 