import React from 'react'
import GameOver from './gameover'

const GameWinner = (props) =>{

	return(
		  <div className='gameleader'>
		  	<div className='gameoverhead'>
		  		<GameOver />
		  	</div>
		    <div className='gamescorewrap'>
		      <div>Game Stats</div>
		    </div>
		    <div className='gamescorewrap'>
		      <div className="scoreAvi">Player</div>
		      <div className="scoreHeader">Score</div>
		    </div>
		    <div className='gamescorewrap'>
		        <div className="gameplayeravi"><img src={props.user.profilePic} id='imgsize'></img></div>
		        <div className="gameplayername">{props.user.name}</div>
		        <div className="gameplayerscore">{props.user.score}</div>
		    </div>
		  </div>
		 
	)

}

export default GameWinner