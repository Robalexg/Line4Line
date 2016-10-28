import React from 'react'
import LeaderBoard from './Leaderboard'
import UserPanel from './UserPanel'
import GameRoom from './GameRoom'


class Lobby extends React.Component {

  constructor (props) {
    super(props); 
    this.state = {
      users: [], 
      displayLeader: false
    }
  this.toggleLeader = this.toggleLeader.bind(this);
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

  toggleLeader(){
    this.setState({
      displayLeader: !this.state.displayLeader
    })
  }

  render () {
    var displayLeaderText = this.state.displayLeader ? 'Close Leaderboard' : 'Show Leaderboard' 
    return (
      <div>
        <div className='lobby'>
          <div className="lobbyLabels">
            <div id="users">
            <UserPanel name={this.name} avi={this.avi}/>
            </div>
            <h4 className="leaderbutton"><a onClick={this.toggleLeader}>{displayLeaderText}</a></h4>
          </div>
          {
            this.state.displayLeader ? 
            this.state.users.map((user, i) =>
              <LeaderBoard user={user} key={i}/>
            )
            : null 
          } 
          <GameRoom /> 
        </div>
          
      </div>
    )
  }
}

export default Lobby
