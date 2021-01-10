// IMPORT LIBRARIES
import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from "react-router-dom"

// IMPORT PAGE COMPONENTS
import HomePage from './pages/Home'
import LoginPage from './pages/Login'

// IMPORT BOOTSTRAP STORE
import BootstrapStore from './store/index'

// IMPORT STYLES
import './styles/global.css'

// CREATE STORE INSTANCE
const store = BootstrapStore()

// RENDER REACT APPLICATION
ReactDOM.render(
  <React.StrictMode>
    <Provider store = { store }>
      <Router>
        <Fragment>
          <Route path="/" exact component={ HomePage } />
          <Route path="/login" exact component={ LoginPage } />
        </Fragment>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)