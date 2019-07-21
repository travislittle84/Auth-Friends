import './App.css'
import React from 'react'
import { Route } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'
import ProtectedRoute from './components/ProtectedRoute'
import Login from './components/Login'


class App extends React.Component {
	render() {
		return (
			<div className="app">
				<PrivateRoute exact path="/" component={ProtectedRoute} />
				<Route exact path="/login" component={Login} />
			</div>
		)
	}
}

export default App
