import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { getFriends } from '../actions'
import { Button } from 'reactstrap'
import ListFriends from './ListFriends';
import AddFriend from './AddFriend'
import AppMenu from './AppMenu'

class App extends React.Component {
	componentDidMount() {		
	}

	logout = (evt) => {
		evt.preventDefault()

		localStorage.removeItem('token')
		this.props.history.push('/login')
	}

	render() {
        this.props.getFriends()
        return (
			<>
                <AppMenu logout={this.logout}/>
                <ListFriends />	
				<AddFriend />		
			</>
		)
	}
}

const mapDispatchToProps = {
	getFriends,
}

export default withRouter(
	connect(null, mapDispatchToProps)(App)
)
