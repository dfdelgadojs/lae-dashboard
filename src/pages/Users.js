// IMPORT LIBRARIES
import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

// IMPORT COMPONENTS
import UsersList from '../components/users/UsersList'

// COMPONENT DEFINITION
class UsersPage extends Component {
   // COMPONENT LIFECYCLE METHODS
   componentDidMount() {
      if (!this.props.store.system.loggedIn) {
         this.props.history.push('/login')
      }
   }

   // COMPONENT RENDERS
   render() {
      return (
         <div className="route-padding">
            <UsersList />
         </div>
      )
   }
}

// MAPPERS
const mapStateToProps = state => ({
   store: state
 })

// EXPORT COMPONENT
export default connect(mapStateToProps, null)(UsersPage)
