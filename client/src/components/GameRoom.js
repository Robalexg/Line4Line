import React from 'react'
import MixedRoom from './MixedRoom'
import SpeechRoom from './SpeechRoom'
import MusicRoom from './MusicRoom'

const GameRoom = (props) =>{

	return(
		<div className="gamewrapper">
		<SpeechRoom />
		<MusicRoom />
		<MixedRoom />
			
		</div> 
	)

}

export default GameRoom