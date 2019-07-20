import axios from 'axios'

// action types
export const LOGIN_START = 'LOGIN_START'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILED = 'LOGIN_FAILED'

// action creators

// export function getAccount() {
// 	// can return a function because we're using redux-thunk
// 	return (dispatch) => { // receives direct access to the dispatcher
// 		// enter the "loading" state
// 		dispatch({ type: GET_ACCOUNT_START })

// 		const headers = {
// 			Authorization: localStorage.getItem('token'),
// 		}

// 		axios.get('http://localhost:5000/api/friends', { headers })
// 			.then((res) => {
// 				dispatch({ type: GET_ACCOUNT_SUCCESS, payload: res.data })
// 			})
// 			.catch((err) => {
// 				dispatch({ type: GET_ACCOUNT_FAILED, payload: err.response.data })
// 			})
// 	}
// }

export function login(username, password) {
	return (dispatch) => {
		dispatch({ type: LOGIN_START })

		return axios.post('http://localhost:5000/api/login', { username, password })
			.then((res) => {
				localStorage.setItem('token', res.data.token)
				dispatch({ type: LOGIN_SUCCESS })
			})
			.catch((err) => {
				const payload = err.response ? err.response.data : err
				dispatch({ type: LOGIN_FAILED, payload })
			})
	}
}