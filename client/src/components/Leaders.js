import React from 'react'


const Leaders= (props) => {

console.log('this is leaders props', props)
  return(
    <div>
      <div className='scoreWrap'>
          <div className="playerAvi"><img src={props.users.profilePic} id='imgsize'></img></div>
          <div className="playerName">{props.users.name}</div>
          <div className="playerScore">{props.users.score}</div>
      </div>
    </div>
  )
}

export default Leaders