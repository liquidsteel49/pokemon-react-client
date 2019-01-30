import React, { Component } from 'react'

const apiUrl = 'http://localhost:4741'

class Profile extends Component {
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
    const poke = Number(this.state.favPoke)
    console.log(typeof this.state.favPoke)
    return fetch(apiUrl + '/profile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization':`Token token=${this.props.user.token}`
      },
      body: JSON.stringify({
        name: this.state.trainerName,
        fav_poke_id: poke,
        owner: this.props.user._id
      })
    })
  }

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
