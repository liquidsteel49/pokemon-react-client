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

  componentDidMount() {

    const { history, profileId, user } = this.props
    console.log('profileID',profileId)
    console.log('user', user)

    fetch(apiUrl + '/profile/' + user._id, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization':`Token token=${this.props.user.token}`
      }
    })
      .then(handleErrors)
      .then(res => {
        console.log('after handleError', res)
        return res
      })
      .then(res => {
        return res.json()
      })
      // .then(res => {
      //   console.log(res)
      //   return res
      // })
      .then(res => {
        console.log('res.body', res.body)
        this.setState({ trainerName: res.body.name, favPoke: res.body.fav_poke_id  })
      })
      .catch(err => {
        console.error(err)
      })
  }

  render() {
    return(
      <div>
        <h1>profile</h1>
        <h2>name: {this.state.trainerName}</h2>
        <h2>poke id: {this.state.favPoke}</h2>
      </div>
    )
  }
}

export default withRouter(ShowProfile)
