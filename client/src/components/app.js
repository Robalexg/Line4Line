import React from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'
import RealLobby from './reallobby'
import Login from './login'
import EndGame from './EndGame'
import NavBar from './NavBar'
import socket from '../../socket'



class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      currentUser: false
    }
    //Bind this to logout so it can be passed down through multiple components
    this.logout = this.logout.bind(this)
  }

  componentDidMount () {
    //Make and initial get request to sign the user in with Facebook
    //This current user will be used in many places throughout the app.
    $.get('/user')
    .then(user => {
      this.setState({
        currentUser: user
      })
      socket.emit("signedIn",user)
    })
    .catch(err => {
      console.log('App.js - No user is signed in: ', err)
    })
  }

  logout () {
    this.setState({
      currentUser: false
    })
  }

  render () {
    return (
      <div>
        <NavBar
          logout={this.logout}
          currentUser={this.state.currentUser}
        />
        {
        //if there is a current user, render the lobby/story with react router
        //else tell the user to login
        this.state.currentUser ? 
        <Router history={hashHistory}>
          <Route path='/' component={RealLobby} />
          <Route path='/endgame' component={EndGame} />
        </Router> 
        : 
        <div>Please Login</div>
        }
      </div>
    )
  }
}

export default App
