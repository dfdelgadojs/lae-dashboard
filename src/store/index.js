// IMPORT LIBRARIES
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

// IMPORT REDUCERS
import system from './system/index'

// SET ROOT REDUCER
const rootReducer = combineReducers({
   system
})

const BootstrapStore = () => {
   return createStore(rootReducer, applyMiddleware(thunk))
}

export default BootstrapStore
