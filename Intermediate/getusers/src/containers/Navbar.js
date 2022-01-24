import React from 'react';
import { NavLink } from 'react-router-dom';
import { Logo } from '../image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Navbar(props) {
	let link = props.users ? 'links2' : 'links';

	function SocialLinks() {
		return (
			<div className='social_links'>
				<NavLink to=''>
					<FontAwesomeIcon icon={['fab', 'instagram']} transform='grow-6' />
				</NavLink>
				<NavLink to=''>
					<FontAwesomeIcon icon={['fab', 'google']} transform='grow-6' />
				</NavLink>
				<NavLink to=''>
					<FontAwesomeIcon icon={['fab', 'youtube']} transform='grow-6' />
				</NavLink>
				<NavLink to=''>
					<FontAwesomeIcon icon={['fab', 'snapchat']} transform='grow-6' />
				</NavLink>
			</div>
		);
	}

	function UserButton() {
		return (
			<div className='getuser'>
				<button onClick={props.getUsersClicked}>
					<lord-icon
						src='https://cdn.lordicon.com/eszyyflr.json'
						trigger='loop-on-hover'
						colors='primary:#ffffff,secondary:#252525'
						stroke='100'
						scale='60'
						style={{ width: '30px', height: '30px' }}
					></lord-icon>
					Get Users
				</button>
			</div>
		);
	}

	return (
		<div className='navbar'>
			<img src={Logo} alt='Logo Here' height={80} width={240}></img>
			<div className={link}>
				<NavLink to='/' onClick={props.clickedHome}>
					Home
				</NavLink>
				<NavLink to='users' onClick={props.clickedUser}>
					Users
				</NavLink>
			</div>
			<div className='right_container'>
				{props.users ? <UserButton /> : <SocialLinks />}
			</div>
		</div>
	);
}
