import React from 'react'
import LeaderBoard from './Leaderboard'
import UserPanel from './UserPanel'
import GameRoom from './GameRoom'
import socket from '../../socket'

class RealLobby extends React.Component {

  constructor (props) {
    super(props); 
    this.state = {
      users: [], 
      current: []
    }
  }

  componentDidMount () {
    socket.on("getUsers",function(users){
      this.setState({
        current:users})
      console.log("Current Users Online:", users)
    }.bind(this))
    socket.emit("inLobby",true)

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

  clicked(e){
    var room = e.target.id
    console.log(room)
    socket.emit("createRoom",room)
  }

  render () {
    return (
      <div>
        <div className='lobby'>
          <div className="lobbyLabels">
            <div id="users">
            <UserPanel name={this.name} avi={this.avi} users={this.state.current}/>
            </div>
            <LeaderBoard leaders={this.state.users}/>
          </div>
          <GameRoom onClick={this.clicked.bind(this)}/> 
        </div>
          
      </div>
    )
  }
}

export default RealLobby