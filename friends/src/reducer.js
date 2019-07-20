import {
	// MAKE_DEPOSIT,
	// MAKE_WITHDRAWAL,
	// GET_ACCOUNT_START,
	// GET_ACCOUNT_SUCCESS,
	// GET_ACCOUNT_FAILED,
	LOGIN_START,
	LOGIN_SUCCESS,
	LOGIN_FAILED,
} from './actions'

// all state values need an initial value
const initialState = {
	isLoading: false,
	errorMessage: null,
	// checking: 0,
	// savings: 0,
	// accountActivity: [],
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
		// case GET_ACCOUNT_START: {
		// 	return {
		// 		...state,
		// 		isLoading: true,
		// 	}
		// }
		// case GET_ACCOUNT_SUCCESS: {
		// 	const { checking, savings, accountActivity } = action.payload
		// 	return {
		// 		...state,
		// 		isLoading: false,
		// 		errorMessage: null,
		// 		checking,
		// 		savings,
		// 		accountActivity,
		// 	}
		// }
		// case GET_ACCOUNT_FAILED: {
		// 	return {
		// 		...state,
		// 		isLoading: false,
		// 		errorMessage: action.payload.message,
		// 	}
		// }
		case LOGIN_START: {
			return {
				...state,
				isLoading: true,
			}
		}
		case LOGIN_SUCCESS: {
			return {
				...state,
				isLoading: false,
				errorMessage: null,
			}
		}
		case LOGIN_FAILED: {
			return {
				...state,
				isLoading: false,
				errorMessage: action.payload.message,
			}
		}
		default:
			return state
	}
}