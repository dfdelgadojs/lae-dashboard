// IMPORT CONSTANTS
import {
   SET_LOADING,
   SET_NOTIFICATION,
   SET_USER_DATA,
   SET_LOGGED_IN
} from './constants'

// SET INITIAL STATE
const initialState = {
   loading: false,
   loggedIn: false,
   user: {},
   notification: {
      show: false,
      message: ''
   }
}

const SystemReducer = (state = initialState, action) => {
   const { type, payload } = action
   let newState = { ...state }
   switch (type) {
      case SET_LOADING:
         newState.loading = payload
         return newState
      case SET_NOTIFICATION:
         newState.notification = { ...payload }
         return newState
      case SET_USER_DATA:
         newState.user = { ...payload }
         return newState
      case SET_LOGGED_IN:
         newState.loggedIn = payload
         return newState
      default:
         return newState
   }
}

// EXPORT REDUCER
export default SystemReducer
