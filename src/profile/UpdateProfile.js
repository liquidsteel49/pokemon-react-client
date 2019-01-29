import React, { Component } from 'react'

const apiUrl = 'http://localhost:4741'

class Profile extends Component {
  constructor (props) {
    super(props)

    this.state = {
      trainerName: '',
      favPoke: ''
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  createProfile = (event) => {
    event.preventDefault()
    return fetch(apiUrl + '/profile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization':`Token token=${this.props.user.token}`
      },
      body: JSON.stringify({
        trainerName: this.state.trainerName,
        favPoke: this.state.favPoke
      })
    })
  }

  render() {
    return(
      <div>
        <form className='update-profile-form' onSubmit={this.createProfile}>
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

export default Profile
