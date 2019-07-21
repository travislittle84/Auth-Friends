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
} from './actions'

// all state values need an initial value
const initialState = {
    // isLoading: false,
    loggingIn: false,
    errorMessage: null,
    gettingFriends: false,
    friends: [],
    updatingFriend: false,
    deleteingFriend: false,
}

export default function(state = initialState, action) {
	switch (action.type) {
		// case MAKE_DEPOSIT: {
		// 	const { amount, account, description } = action.payload
		// 	const newAmount = parseInt(amount) + state[account]
		// 	const newActivity = state.accountActivity.concat([
		// 		// adding more data to the description before it goes into store
		// 		`${new Date()}, ${description}, ${amount}`,
		// 	])
			
		// 	return {
		// 		...state,
		// 		[account]: newAmount,
		// 		accountActivity: newActivity,
		// 	}
		// }
		// // NOTE: SAME AS MAKE_DEPOSIT, TWEAKED SO IT SUBTRACTS INSTEAD OF ADDS
		// case MAKE_WITHDRAWAL: {
		// 	const { amount, account, description } = action.payload
		// 	const newAmount = state[account] - parseInt(amount)
		// 	const newActivity = state.accountActivity.concat([
		// 		// adding more data to the description before it goes into store
		// 		`${new Date()}, ${description}, -${amount}`,
		// 	])
			
		// 	return {
		// 		...state,
		// 		[account]: newAmount,
		// 		accountActivity: newActivity,
		// 	}
		// }
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
                addingFriend: true,
            }
        }
		case LOGIN_START: {
			return {
				...state,
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
		default:
			return state
	}
}