import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

class App extends React.Component {
	componentDidMount() {
		// this.props.getFriends()
	}

	logout = (evt) => {
		evt.preventDefault()

		localStorage.removeItem('token')
		this.props.history.push('/login')
	}

	render() {
		return (
			<>
				<button type="button" onClick={this.logout}>Logout</button>

				
			</>
		)
	}
}

const mapDispatchToProps = {
	// getAccount,
}

export default withRouter(
	connect(null, mapDispatchToProps)(App)
)
