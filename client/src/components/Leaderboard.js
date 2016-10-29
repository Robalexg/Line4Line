import React from 'react'
import Leaders from './Leaders'

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
    {props.leaders.map((user, i) => 
          <Leaders users={user} key={i}/>
        )} 
  </div>
)
  
}

export default LeaderBoard