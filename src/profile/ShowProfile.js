import React, { Component } from 'react'
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
      favPoke: '',
      imgPoke: '',
      pokeName: '',
      pokeNum: ''
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
        return res.json()
      })
      .then(res => {
        this.setState({ trainerName: res.body.name, favPoke: res.body.fav_poke_id  })
        return res.body.fav_poke_id
      })
      .then(resPoke => {
        fetch(apiUrl + '/pokeLists/' + resPoke, {
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
          .then(res => {
            console.log('res.body', res.body)
            this.setState({ pokeName: res.body.name, imgPoke: res.body.img.visible, pokeNum: res.body.poke_num  })
          })
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
        <h2>Pokedex Num: {this.state.pokeNum}</h2>
        <h2>poke name: {this.state.pokeName}</h2>
      </div>
    )
  }
}

export default withRouter(ShowProfile)
