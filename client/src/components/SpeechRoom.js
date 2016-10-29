import React from 'react'

const SpeechRoom = (props) =>{

  return(
    <div className="speechroom">
      <a id="speech"onClick={props.onClick.bind(this)}className="gamebutton">
      Play in the Speech Room
    </a>
    </div> 
  )
}

export default SpeechRoom