import React from 'react'
import { Input, Form } from 'reactstrap'
import { editFriend } from '../actions'
import { connect } from 'react-redux';

class FriendItem extends React.Component {
    constructor(props) {
        super()
        this.state = {
            value: '',
            editing: false
        }
    }

    toggleEdit = (event) => {
        event.preventDefault()
        console.log("double click edit")
        event.target.className === 'edit-field' ? event.target.className = '' : event.target.className = 'edit-field'
        this.setState({editing: true})
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    focusOut = () => {
        this.setState({ editing: false })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const { value } = this.state
        const { friend_id } = this.props

        const field = document.getElementById('edit-friend-box')
        const field_attr = field.getAttribute('field')
        
        this.props.doEditFriend(friend_id, field_attr, value)
        this.setState({ editing: false })
    }

    render() {
        const { value, editing } = this.state
        const { field_name } = this.props
        if (editing) {
            return (                
                <Form className="edit-field" onSubmit={this.handleSubmit} >
                    <Input
                        autoFocus
                        bsSize="sm"
                        type="text"
                        id="edit-friend-box"
                        name="value"
                        field={field_name}
                        value={value}
                        onBlur={this.focusOut}
                        onChange={this.handleChange} />
                </Form>
            )
        }
        return (
            <span className="display-field" onDoubleClick={this.toggleEdit}>{this.props.value}</span>
        )
    }
}

const mapDispatchToProps = {
    editFriend: editFriend
}

export default connect(null, mapDispatchToProps)(FriendItem)