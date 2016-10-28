import React from 'react'
import GameOver from './gameover'
import GameWinner from './gamewinner'

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
          {this.state.users.map((user, i) =>
              <GameWinner user={user} key={i}/>)
          } 
        </div>
      </div>
    )
  }
}

export default EndGame