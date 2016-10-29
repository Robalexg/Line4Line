import React from 'react'
import MixedRoom from './MixedRoom'
import SpeechRoom from './SpeechRoom'
import MusicRoom from './MusicRoom'

const GameRoom = (props) =>{
	return(
		<div className="gamewrapper">
		<SpeechRoom onClick={props.onClick.bind(this)}/>
		<MusicRoom onClick={props.onClick.bind(this)}/>
		<MixedRoom onClick={props.onClick.bind(this)}/>
		</div> 
	)

}

export default GameRoom