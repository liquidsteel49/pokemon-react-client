import React, { Component } from 'react'
import messages from './messages'
import { withRouter } from 'react-router-dom'

const apiUrl = 'http://localhost:4741'
const handleErrors = res => {
  if (res.ok) {
    return res
  } else {
    throw new Error('Invalid information')
  }
}

class CreateProfile extends Component {
  constructor () {
    super()

    this.state = {
      trainerName: '',
      favPoke: null
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  createProfile = (event) => {
    event.preventDefault()

    // look at line 26 from ChangePassword for pattern
    // flash defined in line 29 of App.js file
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
      .then(() => history.push('/profile'))
      .catch(err => {
        console.error(err)
        flash(messages.createProfileFailure, 'flash-error')
      })
  }

  render() {
    return(
      <div>
        <form className='create-profile-form' onSubmit={this.createProfile}>
          <h3>Create Profile</h3>

          <label htmlFor="trainerName">Name</label>
          <input
            required
            name="trainerName"
            value={this.state.trainerName}
            type="string"
            placeholder="Trainer Name"
            onChange={this.handleChange}
          />
          <label htmlFor="favPoke">Favorite Poke ID</label>
          <input
            required
            name="favPoke"
            value={this.state.favPoke}
            type="number"
            placeholder="Favorite Poke ID!"
            onChange={this.handleChange}
          />
          <button type="submit">Create Profile</button>
        </form>
      </div>
    )
  }
}

export default withRouter(CreateProfile)
