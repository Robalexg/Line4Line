import React from 'react'
import LeaderBoard from './Leaderboard'
import UserPanel from './UserPanel'
import GameRoom from './GameRoom'


class RealLobby extends React.Component {

  constructor (props) {
    super(props); 
    this.state = {
      users: [], 
    }
  }

  componentDidMount () {
   $.get('/user')
      .then(user => {
        console.log('this is the returned get user', user)
        this.name = user.name
        this.avi = user.profileImage
      })

    $.get('/score')
    .then(users => {
      console.log('Got users: ', users);
      this.setState({
       users: users
      })
    })
  }

  render () {
    return (
      <div>
        <div className='lobby'>
          <div className="lobbyLabels">
            <div id="users">
            <UserPanel name={this.name} avi={this.avi}/>
            </div>
          {this.state.users.map((user, i) =>
          <LeaderBoard user={user} key={i}/>)
          } 
          </div>
          <GameRoom /> 
        </div>
          
      </div>
    )
  }
}

export default RealLobby