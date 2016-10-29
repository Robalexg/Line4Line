import React from 'react'

const CurrentUsers = (props) =>{

	return(
		<div className="curwrap">
			<div className="onlineuser">
			  <div className="curuseravi"><img src={props.users.profilePic} id="curuserimg"></img></div>
        <div className="curusername">{props.users.name}</div>
			</div>
		</div> 
	)

}

export default CurrentUsers 