// IMPORT LIBRARIES
import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from "react-router-dom"

// IMPORT PAGE COMPONENTS
import HomePage from './pages/Home'
import LoginPage from './pages/Login'
import UsersPage from './pages/Users'
import TasksPage from './pages/Tasks'
import RootHome from './pages/RootHome'

// IMPORT LAYOUT COMPONENTS
import Layout from './components/layout/Layout'
import Loading from './components/layout/Loading'
import Notification from './components/layout/Notification'

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
          <Route path="/" component={ Loading } />
          <Route path="/" component={ Notification } />
          <Route path="/" component={ Layout } />
          <Route path="/" exact component={ RootHome } />
          <Route path="/inicio" exact component={ HomePage } />
          <Route path="/usuarios" exact component={ UsersPage } />
          <Route path="/tareas" exact component={ TasksPage } />
          <Route path="/login" exact component={ LoginPage } />
        </Fragment>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)