// IMPORT CONSTANTS
import {
   SET_LOADING,
   SET_NOTIFICATION,
   SET_USER_DATA,
   SET_LOGGED_IN,
   SET_TASKS,
   SET_PAGE
} from './constants'

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

export const SetUserData = (payload) => {
   return {
      type: SET_USER_DATA,
      payload
   }
}

export const SetLoggedIn = (payload) => {
   return {
      type: SET_LOGGED_IN,
      payload
   }
}

export const SetTasks = (payload) => {
   return {
      type: SET_TASKS,
      payload
   }
}

export const SetPage = (payload) => {
   return {
      type: SET_PAGE,
      payload
   }
}
