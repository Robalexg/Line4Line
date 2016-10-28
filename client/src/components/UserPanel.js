import React from 'react'
import CurrentUsers from './CurrentUsers'

const UserPanel= (props) =>{

	return(
		<div className="userwrap">
			<div className="currentuser">
		    <div className="currentavi"><img src={props.avi}></img></div>
	      <div className="currentname"><p className="name">{props.name}</p></div>
			</div>
			<div className="loggedin">
			<CurrentUsers />
			</div>
		</div> 
	)

}

export default UserPanel 