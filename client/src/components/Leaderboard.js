import React from 'react'

const LeaderBoard = (props) => {

return(
  <div className='leaderwrapper'>
    <div className='scoreWrap'>
      <div className="playerAvi">Player</div>
      <div className="scoreHeader">Score</div>
    </div>
    <div className='scoreWrap'>
        <div className="playerAvi"><img src={props.user.profileImage} id='imgsize'></img></div>
        <div className="playerName"><span className="center">{props.user.name}</span></div>
        <div className="playerScore"><span className="center">{props.user.score}</span></div>
    </div>
  </div>
)
  
}

export default LeaderBoard