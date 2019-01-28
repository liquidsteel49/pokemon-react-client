import React, { Component } from 'react'

class Profile extends Component {
  constructor () {
    super()

    this.state = {
      trainerName: '',
      favPoke: ''
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  // createProfile = credentials => {
  //   return fetch(apiUrl + '/profile', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       this.state: {
  //         trainerName: credentials.email,
  //         favPoke: credentials.password,
  //       }
  //     })
  //   })
  // }

  render() {
    return(
      <div>
        <form className='profile-form' onSubmit={this.createProfile}>
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
