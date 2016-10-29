import React from 'react'
import GameOver from './GameOver'

const GameWinner = (props) =>{

	return(
        <tr>
		<td><img src={props.user.profilePic} id='imgsize'></img></td>
		 <td>{props.user.name}</td>
		 <td >{props.user.score}</td>
		</tr>
	)

}

export default GameWinner