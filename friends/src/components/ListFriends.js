import React from 'react'
import { connect } from 'react-redux'
import { Table } from 'reactstrap'
import FriendItem from './FriendItem'
import { editFriend, getFriends, deleteFriend } from '../actions'

function ListFriends(props) {
    const {
        gettingFriends,
        errorMessage,
        friends,
        editingFriend,
        deletingFriend,
    } = props


    if (gettingFriends) {
        return <div className="spinner"></div>
    }

    if (errorMessage) {
        return <p>Error retreiving friends: {props.errorMessage}</p>
    }

    if (editingFriend) {
        return <div className="spinner"></div>
    }

    if (deletingFriend) {
        return <div className="spinner"></div>
    }

    function doEditFriend(id, field, value) {
                
                let friendToUpdate = {} 
        friends.forEach(friend => { // forEach used but not editing original array
            if (friend.id === parseInt(id)) {
                friendToUpdate = friend
            }
        })        
        friendToUpdate[field] = value

        props.editFriend(friendToUpdate)
    }

    function doDeleteFriend(event) {
        event.preventDefault()
        const id = event.target.id
        props.deleteFriend(id)
    }

    return (
        // Display React table of friends
        <div>
            <Table>
                <thead>
                    <tr className="column-headers">    
                        <th className="row-count-header" >#</th>
                        <th className="name-header">Name</th>
                        <th className="age-header">Age</th>
                        <th className="email-header">Email</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {friends.map((friend,index) => {
                        return( 
                            <tr>
                                <th scope="row">{index + 1}</th>
                                <td className="name-field"><FriendItem doEditFriend={doEditFriend} friend_id={friend.id} key={friend.id} field_name="name" value={friend.name}/></td>
                                <td className="age-field"><FriendItem key={friend.id} doEditFriend={doEditFriend} friend_id={friend.id} field_name="age" value={friend.age}/></td>
                                <td className="email-field"><FriendItem key={friend.id} doEditFriend={doEditFriend} friend_id={friend.id} field_name="email" value={friend.email}/></td>
                                <td><img
                                    alt={`delete ${friend.name}`}
                                    key={friend.id}
                                    id={friend.id}
                                    onClick={doDeleteFriend}
                                    src="https://img.icons8.com/material-sharp/24/000000/delete-forever.png"/></td>
                            </tr>
                        )                   
                    })}
                </tbody>
            </Table>
        </div>
        
    )
}

const mapDispatchToProps = {
    editFriend: editFriend,
    getFriends: getFriends,
    deleteFriend: deleteFriend,
}

const mapStateToProps = (state) => {
    return {
        gettingFriends: state.gettingFriends,
        errorMessage: state.errorMessage,
        friends: state.friends
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListFriends)