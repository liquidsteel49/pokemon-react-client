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

    fetch(apiUrl + '/profile' + '/' + user._id, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization':`Token token=${this.props.user.token}`
      }
    })
      .then(handleErrors)
      .then(res => JSON.stringify(res))
      .then(res => {
        console.log(res)
        debugger
        return res
      })
      .then(res => {
        this.setState({ trainerName: res.data.name, favPoke: res.data.fav_poke_id  })
      })
      .catch(err => {
        console.error(err)
      })
  }

  render() {
    return(
      <div>This is your profile</div>
    )
  }
}

export default withRouter(ShowProfile)
