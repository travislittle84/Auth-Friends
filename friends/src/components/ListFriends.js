import React from 'react'
import { connect } from 'react-redux'
import { Table } from 'reactstrap'

function ListFriends(props) {
    const {
        gettingFriends,
        errorMessage,
        friends,
    } = props


    if (gettingFriends) {
        return <div class="spinner"></div>
    }

    if (errorMessage) {
        return <p>Error retreiving friends: {props.errorMessage}</p>
    }

    return (
        <div>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {friends.map((friend,index) => {
                        return( 
                            <tr>
                                <th scope="row">{index + 1}</th>
                                <td>{friend.name}</td>
                                <td>{friend.age}</td>
                                <td>{friend.email}</td>
                                <td>Edit</td>
                                <td>Remove</td>
                            </tr>
                        )                   
                    })}
                </tbody>
            </Table>
        </div>
        
    )
}

const mapStateToProps = (state) => {
    return {
        gettingFriends: state.gettingFriends,
        errorMessage: state.errorMessage,
        friends: state.friends
    }
}

export default connect(mapStateToProps)(ListFriends)