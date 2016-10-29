import React from 'react'

const LeaderBoard = (props) => {

return(
  <div className='leaderwrapper'>
    <div className='scoreWrap'>
      <div>High Scores</div>
    </div>
    <div className='scoreWrap'>
      <div className="scoreAvi">Player</div>
      <div className="scoreHeader">Score</div>
    </div>
    <div className='scoreWrap'>
        <div className="playerAvi"><img src={props.user.profilePic} id='imgsize'></img></div>
        <div className="playerName">{props.user.name}</div>
        <div className="playerScore">{props.user.score}</div>
    </div>
  </div>
)
  
}

export default LeaderBoard