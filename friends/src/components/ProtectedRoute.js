import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'


class App extends React.Component {
	componentDidMount() {
		// get stuff
	}

	logout = (evt) => {
		evt.preventDefault()

		localStorage.removeItem('token')
		this.props.history.push('/login')
	}

	render() {
		return (
			<div>
				<button type="button" onClick={this.logout}>Logout</button>
			</div>
		)
	}
}

const mapDispatchToProps = {
	// getStuff,
}

export default withRouter(
	connect(null, mapDispatchToProps)(App)
)
