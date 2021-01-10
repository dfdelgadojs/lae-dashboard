// IMPORT LIBRARIES
import React, { Component } from 'react'
import { connect } from 'react-redux'

// COMPONENT DEFINITION
class HomePage extends Component {
   // COMPONENT LIFECYCLE METHODS
   componentDidMount() {
      console.log(this.props)
      if (!this.props.store.system.loggedIn) {
         this.props.history.push('/login')
      }
   }

   // COMPONENT RENDERS
   render() {
      return (
         <div>
            HomePage
         </div>
      )
   }
}

// MAPPERS
const mapStateToProps = state => ({
   store: state
 })

// EXPORT COMPONENT
export default connect(mapStateToProps, null)(HomePage)
