import axios from 'axios'

// login action types
export const LOGIN_START = 'LOGIN_START'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILED = 'LOGIN_FAILED'

// friend action types
export const GET_FRIENDS_START = 'GET_FRIENDS_START'
export const GET_FRIENDS_SUCCESS = 'GET_FRIENDS_SUCCESS'
export const GET_FRIENDS_FAILED = 'GET_FRIENDS_FAILED'

export const ADD_FRIEND_START = 'ADD_FRIEND_START'
export const ADD_FRIEND_SUCCESS = 'ADD_FRIEND_SUCCESS'
export const ADD_FRIEND_FAILED = 'ADD_FRIEND_FAILED'

// action creators

export function getFriends() {
	// can return a function because we're using redux-thunk
	return (dispatch) => { // receives direct access to the dispatcher
		// enter the "loading" state
		dispatch({ type: GET_FRIENDS_START })
		const headers = {
			authorization: localStorage.getItem('token'),
		}

		axios.get('http://localhost:5000/api/friends', { headers })
			.then((res) => {
				dispatch({ type: GET_FRIENDS_SUCCESS, payload: res.data })
			})
			.catch((error) => {
				dispatch({ type: GET_FRIENDS_FAILED, payload: error })
			})
	}
}

export function login(username, password) {
	return (dispatch) => {
		dispatch({ type: LOGIN_START })

		return axios.post('http://localhost:5000/api/login', { username, password })
			.then((res) => {
                localStorage.setItem('token', res.data.payload)
				dispatch({ type: LOGIN_SUCCESS })
			})
			.catch((error) => {
                const payload = error
				dispatch({ type: LOGIN_FAILED, payload })
			})
	}
}

export function addFriend(friend) {
    console.log("ADD FRIEND", friend)
    return (dispatch) => {
        dispatch({ type: ADD_FRIEND_START })
        const headers = {
			authorization: localStorage.getItem('token'),
		}
        return axios.post(`http://localhost:5000/api/friends/`, friend, {headers})
            .then((res) => {
                dispatch({ type: ADD_FRIEND_SUCCESS, payload: friend })
            })
            .catch((error) => {
                console.log("ERROR", error)
                dispatch({ type: ADD_FRIEND_FAILED, payload: error })
            })
    }
}