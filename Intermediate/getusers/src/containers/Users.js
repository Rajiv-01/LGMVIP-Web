import React, { useState } from 'react';
import UserCard from '../components/UserCard';
import { ScaleLoader } from 'react-spinners';

export default function Users(props) {
	const [article, setarticle] = useState([]);
	const [loading, setloading] = useState(true);
	const [isnext, setisnext] = useState(false);
	const [getuserclicked, setuserclicked] = useState(false);
	const [count, setcount] = useState(1);

	const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

	const onclick1 = async () => {
		let url = `https://reqres.in/api/users?page=${1}`;
		setloading(false);
		setisnext(false);
		const data = await fetch(url);
		const parsedData = await data.json();
		await delay(1000);
		setarticle(parsedData.data);
		setloading(true);
	};

	const onclick2 = async () => {
		let url = `https://reqres.in/api/users?page=${2}`;
		setloading(false);
		setisnext(true);
		const data = await fetch(url);
		const parsedData = await data.json();
		await delay(1000);
		setarticle(parsedData.data);
		setloading(true);
	};

	if (props.getuser && count === 1) {
		setuserclicked(true);
		onclick1();
		setcount(2);
	}
	function allUsers() {
		return (
			<>
				<div className='all_users'>
					{article.map((element) => {
						return (
							<UserCard
								key={element.id}
								email={element.email}
								id={element.id}
								image={element.avatar}
								firstName={element.first_name}
								lastName={element.last_name}
							/>
						);
					})}
				</div>
				<div className='both_buttons'>
					<button
						id='firstButton'
						disabled={!isnext}
						onClick={() => onclick1()}
					>
						Previous
					</button>

					<button
						id='secondButton'
						disabled={isnext}
						onClick={() => onclick2()}
					>
						Next
					</button>
				</div>
			</>
		);
	}

	function loadingAndButton() {
		return (
			<div>
				{loading ? (
					allUsers()
				) : (
					<ScaleLoader
						color='#36D7B7'
						height={100}
						width={10}
						radius={10}
						margin={5}
					/>
				)}
			</div>
		);
	}

	return (
		<div className='user_container'>
			<h1>All Users </h1>
			{getuserclicked ? (
				loadingAndButton()
			) : (
				<h2 style={{ marginTop: '5rem', fontFamily: 'var(--font-links)' }}>
					Click Get User Button
				</h2>
			)}
		</div>
	);
}
