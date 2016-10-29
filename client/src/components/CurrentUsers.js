import React from 'react'

const CurrentUsers = (props) =>{

console.log('this is current user props', props)
	return(
		<div className="curwrap">
			<div className="onlineuser">
			  <div className="curuseravi"></div>
        <div className="curusername"></div>
			</div>
		</div> 
	)

}

export default CurrentUsers 