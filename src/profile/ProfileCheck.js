import React, { Component } from 'react'
import messages from './messages'
import { withRouter } from 'react-router-dom'
import CreateProfile from './CreateProfile.js'
import ShowProfile from './ShowProfile.js'
<<<<<<< HEAD
import apiUrl from '../apiConfig.js'

=======

const apiUrl = 'http://localhost:4741'
>>>>>>> dev
const handleErrors = res => {
  if (res.ok) {
    return res
  } else {
    throw new Error('Error in ProfileCheck.js')
  }
}


class ProfileCheck extends Component {
  constructor () {
    super()

    this.state = {
      trainerName: '',
      favPoke: '',
      imgPoke: '',
      pokeName: '',
      pokeNum: '',
      profileId: false
    }
  }

  setProfileId = () => this.setState({ profileId: true })

  // checkProfileId = res => {
  //   console.log('In checkProfileId', res)
  //   if (res.ok) {
  //     this.setProfileId()
  //   } else {
  //     this.setState({ profileId: false })
  //   }
  // }

  profileCheck = (res) => {

    const { flash, history, setProfileId, profileId, user } = this.props

    fetch(apiUrl + '/profile/' + user._id, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization':`Token token=${this.props.user.token}`
      }
    })
      .then(handleErrors)
      .then(res => {
        return res.json()
      })
      .then(res => {
        console.log(res.body._id)
        debugger
        return res
      })
      .then(res => this.setState({ profileId: res.body._id }))
      .catch(err => {
        console.error(err)
      })
  }

  render() {
    const { flash, history, setProfileId, profileId, user } = this.props

    return(
      <div>
        <h1>profile stuff</h1>
        { this.state.profileId ? <ShowProfile user={this.state.user} profileId={this.state.profileId} /> : <CreateProfile flash={this.flash} user={user} setProfileId={this.setProfileId} profileId={this.state.profileId} /> }
      </div>
    )
  }
}

export default withRouter(ProfileCheck)
