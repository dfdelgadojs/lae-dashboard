// IMPORT LIBRARIES
import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from "react-router-dom"

// IMPORT PAGE COMPONENTS
import HomePage from './pages/Home'

// IMPORT BOOTSTRAP STORE
import BootstrapStore from './store/index'

// CREATE STORE INSTANCE
const store = BootstrapStore()

// RENDER REACT APPLICATION
ReactDOM.render(
  <React.StrictMode>
    <Provider store = { store }>
      <Router>
        <Fragment>
          <Route path="/" exact component={ HomePage } />
        </Fragment>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)