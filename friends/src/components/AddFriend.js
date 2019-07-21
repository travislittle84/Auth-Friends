import React from 'react'
import { Button, Input, Form, Col, FormGroup, Label } from 'reactstrap'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { addFriend } from '../actions'

class AddFriend extends React.Component {
    constructor() {
        super()
        this.state = {
            name: '',
            age: '',
            email: '',
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const { name, age, email } = this.state
        const friendObj = {
            id: Date.now(),
            name: name,
            age: age,
            email: email
        }
        this.props.addFriend(friendObj)
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        const { name, age, email } = this.state

        return (
            <div className="add-friend-form-container">
                <h3>Add Friend</h3>
                <Form onSubmit={this.handleSubmit} className="add-friend-form">
                    <FormGroup row>
                        <Label for="name" sm={2}>Name</Label>
                        <Col sm={10}>
                            <Input type="text" name="name" onChange={this.handleChange} value={name} placeholder="Name" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="age" sm={2}>Age</Label>
                        <Col sm={10}>
                            <Input type="text" name="age" onChange={this.handleChange} value={age} placeholder="Age" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="age" sm={2}>Email</Label>
                        <Col sm={10}>
                            <Input type="text" name="email" onChange={this.handleChange} value={email} placeholder="Email" />
                        </Col>
                    </FormGroup>
                    <FormGroup check row>
                        <Col sm={{ size: 10, offset: 2 }}>
                            <Button type="submit" color="primary">Add Friend</Button>
                        </Col>
                    </FormGroup>               
                </Form>
            </div>
        )
    }
}

const mapDispatchToProps = {
    addFriend: addFriend
}

export default withRouter(connect(null, mapDispatchToProps)(AddFriend))