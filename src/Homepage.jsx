import React, { Component } from 'react'
import Profile from './Profile'

export default class Homepage extends Component {
  render() {
    return (
      <div>
        <h1>Users</h1>
        <Profile username="Jo" color="red"/>
        <Profile username="Hamit" color="blue"/>
      </div>
    )
  }
}
