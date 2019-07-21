import {
	GET_FRIENDS_START,
	GET_FRIENDS_SUCCESS,
	GET_FRIENDS_FAILED,
	LOGIN_START,
	LOGIN_SUCCESS,
	LOGIN_FAILED,
    ADD_FRIEND_SUCCESS,
    ADD_FRIEND_FAILED,
    ADD_FRIEND_START,
    EDIT_FRIEND_FAILED,
    EDIT_FRIEND_START,
    EDIT_FRIEND_SUCCESS,
    DELETE_FRIEND_START,
    DELETE_FRIEND_SUCCESS,
    DELETE_FRIEND_FAILED,
} from './actions'

// all state values need an initial value
const initialState = {
    // isLoading: false,
    loggingIn: false,
    errorMessage: null,
    gettingFriends: false,
    friends: [],
    editingFriend: false,
    deletingFriend: false,
}

export default function(state = initialState, action) {
	switch (action.type) {
		case GET_FRIENDS_START: {
			return {
				...state,
                gettingFriends: true,
                errorMessage: null,
			}
		}
		case GET_FRIENDS_SUCCESS: {
			const friends = action.payload
            return {
				...state,
                gettingFriends: false,
				errorMessage: null,
				friends
			}
		}
		case GET_FRIENDS_FAILED: {
			return {
				...state,
                gettingFriends: false,
				errorMessage: action.payload.message,
			}
        }
        case ADD_FRIEND_SUCCESS: {
            const newFriend = action.payload
            const newList = state.friends.concat(newFriend)
            return {
                ...state,
                addingFriends: false,
                errorMessage: null,
                friends: newList                
            }
        }
        case ADD_FRIEND_FAILED: {
            return {
                ...state,
                addingFriends: false,
                errorMessage: action.payload
            }
        }
        case ADD_FRIEND_START: {
            return {
                ...state,
                errorMessage: null,
                addingFriend: true,
            }
        }
		case LOGIN_START: {
			return {
                ...state,
                errorMessage: null,
                loggingIn: true,
			}
		}
		case LOGIN_SUCCESS: {
			return {
				...state,
                loggingIn: false,
				errorMessage: null,
			}
		}
		case LOGIN_FAILED: {
			return {
				...state,
                loggingIn: false,
				errorMessage: action.payload.message,
			}
        }
        case EDIT_FRIEND_START:
            return {
                ...state,
                editingFriend: true,
                errorMessage: null,
            }
        case EDIT_FRIEND_SUCCESS:
            const newList_fromEdit = action.payload.data
            return {
                ...state,
                editingFriend: false,
                errorMessage: null,
                friends: newList_fromEdit
            }
        case EDIT_FRIEND_FAILED:
            return {
                ...state,
                editingFriend: false,
                errorMessage: action.payload
            }
        case DELETE_FRIEND_START:
            return {
                ...state,
                errorMessage: null,
                deletingFriend: true,
            }
        case DELETE_FRIEND_SUCCESS:
            const newList_fromDelete = action.payload.data           
            // state.friends.concat(newFriend)
            return {
                ...state,
                errorMessage: null,
                deletingFriend: false,
                friends: newList_fromDelete
            }
        case DELETE_FRIEND_FAILED:
            return {
                ...state,
                deletingFriend: false,
                errorMessage: action.payload
            }
		default:
			return state
    }
}