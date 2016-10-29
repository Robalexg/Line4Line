import React from 'react'
import LeaderBoard from './Leaderboard'
import UserPanel from './UserPanel'
import GameRoom from './GameRoom'
import CurrentUsers from './CurrentUsers'
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
      console.log("Current Users Online:", this.state.current)
    }.bind(this))
    socket.emit("inLobby",true)

    socket.on("")
    
   $.get('/user')
      .then(user => {
        this.name = user.name
        this.avi = user.profileImage
      })

    $.get('/score')
    .then(users => {
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