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
    
   // $.get('/user')
   //    .then(user => {
   //      this.name = user.name
   //      this.avi = user.profileImage
   //    })

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
            <UserPanel name={this.name} avi={this.avi}/>
            {this.state.current.map((user, i) => 
              
              <CurrentUsers users={user} key={i}/>
              )
            } 
            </div>
            {this.state.users.map((user, i) =>
                <LeaderBoard user={user} key={i}/>)
            } 
          </div>
          <GameRoom onClick={this.clicked.bind(this)}/> 
        </div>
          
      </div>
    )
  }
}

export default RealLobby