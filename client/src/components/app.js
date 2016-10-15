import React from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'
import Lobby from './Lobby'
import Story from './Story'
import SignUp from './SignUp'
import SignIn from './SignIn'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      currentView: 'Login'
    }
  }

  render () {
    return (
      <div> 
        <h1>Line4Line</h1>
        <Router history={hashHistory}>
          <Route path='/' component={Lobby} />
          <Route path='/sign-in' component={SignIn} />
          <Route path='/sign-up' component={SignUp} />
        </Router>
      </div>
    )
  }
}

export default App
