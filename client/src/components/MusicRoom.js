import React from 'react'

const MusicRoom = (props) =>{

  return(
    <div className="musicroom">
    <a id="music" onClick={props.onClick.bind(this)} className="gamebutton">
      Play in the Music Room
    </a>
      
    </div> 
  )
}

export default MusicRoom