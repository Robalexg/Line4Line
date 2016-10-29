import React from 'react'
import GameOver from './gameover'
import GameWinner from './gamewinner'
import LobbyButton from './lobbybutton'

class EndGame extends React.Component {
	 constructor (props) {
    super(props)
    this.state = {
     users: []
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

  render(){
    return(
      <div className="gamewinner">
        <div className="overgif">
          <GameOver />
        </div>
         <div className='gamescore'> 
         <h1> Score Board</h1>
        <table>
      <tr className="tableHead">
       <td> Player</td>
       <td> Player Name</td>
      <td>Score</td>
      </tr>
<tbody>
  {this.state.users.map((user, i) =>
   <GameWinner user={user} key={i}/>)
  } 
      
</tbody>
</table>
</div>
<div className= "BackGame">
 

<a href="/" className="standardButton blackButton">
         Back To Game 
</a>
</div>
</div>


    )
  }
}

export default EndGame