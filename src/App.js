
import React, { Component } from 'react';
import Login from './components/login/Login';
import Navbar from './components/navbar';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Navbar/>
       			<h1>CFG LOGIN SIGNUP</h1>
				<Login />
			</div>
		);
	}
}

export default App;

