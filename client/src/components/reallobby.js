import React from 'react'
import LeaderBoard from './Leaderboard'
import UserPanel from './UserPanel'
import GameRoom from './GameRoom'
import socket from '../../socket'
import Admin from "./admin"
import Game from './game'



class RealLobby extends React.Component {

  constructor (props) {
    super(props); 
    this.state = {
      users: [], 
      admin: false
    }
  }

  componentDidMount () {
    socket.on("getUsers",function(users){
      this.setState({users:users})
      console.log("Current Users Online:",users)
    }.bind(this))

    socket.on("admin",function(data){
      this.setState({admin:data})
    }.bind(this))

    socket.emit("inLobby",true)

    // $.get('/score')
    // .then(users => {
    //   console.log('Got users: ', users);
    //   this.setState({
    //    users: users
    //   })
    // })

  }

  clicked(e){
    var room = e.target.id
    socket.emit("createRoom",room)
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
            <LeaderBoard user={user} key={i}/>)}   

            {this.state.admin ?
              <Admin/>
              :
              <Game/>
            } 
          </div>
          <GameRoom onClick={this.clicked.bind(this)}/> 
        </div>
          
      </div>
    )
  }
}

export default RealLobby