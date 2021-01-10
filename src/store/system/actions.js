// IMPORT CONSTANTS
import { SET_LOADING, SET_NOTIFICATION } from './constants'

// EXPORT ACTIONS
export const SetLoading = (payload) => {
   return {
      type: SET_LOADING,
      payload
   }
}

export const SetNotification = (payload) => {
   return {
      type: SET_NOTIFICATION,
      payload
   }
}
