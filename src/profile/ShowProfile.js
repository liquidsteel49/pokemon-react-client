import React, { Component } from 'react'
import messages from './messages'
import { withRouter } from 'react-router-dom'

const apiUrl = 'http://localhost:4741'
const handleErrors = res => {
  if (res.ok) {
    return res
  } else {
    throw new Error('Something borke')
  }
}

class ShowProfile extends Component {
  constructor () {
    super()

    this.state = {
      trainerName: '',
      favPoke: null,
      imgPoke: null
    }
  }
}

showProfile = (event) => {
  event.preventDefault()

  const { flash, history, setProfileId, profileId } = this.props

  fetch(apiUrl + '/profile', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization':`Token token=${this.props.user.token}`
    },
    body: JSON.stringify({
      name: this.state.trainerName,
      fav_poke_id: this.state.favPoke
    })
  })
    .then(handleErrors)
    .then(res => res.json())
    .then(res => setProfileId(res.profile._id))
    .then(() => flash(messages.createProfileSuccess, 'flash-success'))
    .then(() => history.push('/Profile'))
    .catch(err => {
      console.error(err)
      flash(messages.createProfileFailure, 'flash-error')
    })
}
