import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { login } from '../actions'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'

class Login extends React.Component {
	constructor() {
		super()
		this.state = {
			username: '',
			password: '',
		}
	}

	handleChange = (evt) => {
		evt.preventDefault()

		this.setState({
			[evt.target.name]: evt.target.value,
		})
	}

	handleSubmit = (evt) => {
		evt.preventDefault()

		const { username, password } = this.state

		this.props.login(username, password)
			.then(() => {
				this.props.history.push("/")
			})
			.catch((error) => {
				console.error(error)
			})
	}

	render() {
		const { username, password } = this.state
        const { loggingIn, errorMessage } = this.props
        
        if (errorMessage) {
            return <p className="error">{errorMessage}</p>
        }

		return (
            <div>
                <h3>Lambda Friends</h3>
                <Form inline onSubmit={this.handleSubmit}>
                    <FormGroup>                    
                        <Label for="username" className="mr-sm-2">Username</Label>
                        <Input type="text" name="username" placeholder="Username" value={username} onChange={this.handleChange} />
                        </FormGroup>
                    <FormGroup>
                        <Label for="password" className="mr-sm-2">Password</Label>
                        <Input type="password" name="password" placeholder="Password" value={password} onChange={this.handleChange} />
                    </FormGroup>
                        {loggingIn
                            ? <div class="spinner"></div> 
                            : <Button type="submit" color="primary">Login</Button>}
                    
			    </Form>
            </div>
			
		)
	}
}

const mapStateToProps = (state) => ({
    isLoading: state.isLoading,
    loggingIn: state.loggingIn,
	errorMessage: state.errorMessage,
})

const mapDispatchToProps = {
	login,
}

export default withRouter(
	connect(
		mapStateToProps,
		mapDispatchToProps,
	)(Login)
)