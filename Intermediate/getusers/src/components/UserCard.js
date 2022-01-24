import React from 'react';

export default function UserCard(props) {
	return (
		<div className='user_card'>
			<span>{props.id}</span>
			<div className='avatar'>
				<img src={props.image} alt='userCard' />
			</div>
			<h3>
				{props.firstName} {props.lastName} <br /> {props.email}.{' '}
			</h3>
		</div>
	);
}
