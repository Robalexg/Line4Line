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
			  Users Online
	      {props.users.map((user, i) => 
	        <CurrentUsers users={user} key={i}/>
	      )} 
			</div>
		</div> 
	)

}

export default UserPanel 