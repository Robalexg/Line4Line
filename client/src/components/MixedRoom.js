import React from 'react'

const MixedRoom = (props) =>{

  return(
    <div className="mixedgame">
    <a id="mix" onClick={props.onClick.bind(this)} className="gamebutton">
      Play in the Grab Bag Room
    </a>
      
    </div> 
  )

}

export default MixedRoom