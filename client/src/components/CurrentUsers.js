import React from 'react'

const CurrentUsers = (props) =>{

console.log('this is current user props', props)
	return(
		<div className="curwrap">
			<div className="onlineuser">
			  <div className="curuseravi"><img src={props.users.avi}></img></div>
        <div className="curusername">{props.users.name}</div>
			</div>
		</div> 
	)

}

export default CurrentUsers 