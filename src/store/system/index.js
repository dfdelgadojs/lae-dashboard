// IMPORT CONSTANTS
import { SET_LOADING, SET_NOTIFICATION } from './constants'

// SET INITIAL STATE
const initialState = {
   loading: false,
   notification: {
      show: false,
      message: '',
      type: ''
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
      default:
         return newState
   }
}

// EXPORT REDUCER
export default SystemReducer
