import React from 'react'

function Profile(props) {
  return (
    <div>
        <h3>Profile for {props.username}</h3>
        <p>Your favorite color is {props.color}</p>
    </div>
  )
}

export default Profile