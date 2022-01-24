import './App.css';
import './static/Css/all.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';

import Home from './containers/Home';
import Navbar from './containers/Navbar';
import Users from './containers/Users';

library.add(fab, faCheckSquare, faCoffee);
function App() {
	const [isuser, setisuser] = useState(false);
	const [getUsers, setgetUsers] = useState(false);

	const changeUser = (value) => {
		setisuser(value);
	};

	const userButtonClicked = () => {
		setgetUsers(true);
	};
	return (
		<div className='main_body'>
			<Router>
				<Navbar
					users={isuser}
					clickedUser={() => changeUser(true)}
					clickedHome={() => changeUser(false)}
					getUsersClicked={() => userButtonClicked()}
				/>
				<Routes>
					<Route path='' element={<Home />} />
					<Route path='users' element={<Users getuser={getUsers} />}></Route>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
