// IMPORT LIBRARIES
import React, { Component, Fragment } from 'react'

// IMPORT COMPONENTS
import LoginFrom from '../components/login/LoginForm'

// IMPORT STYLES
import '../styles/login.css'

// COMPONENT DEFINITION
class LoginPage extends Component {
   // COMPONENT RENDERS
   render() {
      return (
         <Fragment>
            <LoginFrom { ...this.props } />
         </Fragment>
      )
   }
}

// EXPORT COMPONENT
export default LoginPage
