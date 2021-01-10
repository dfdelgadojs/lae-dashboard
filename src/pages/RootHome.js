// IMPORT COMPONENTS
import React, { Component } from 'react'

// COMPONENT DEFINITION
class RootHome extends Component {
   // COMPONENT LIFECYCLE METHODS
   componentDidMount() {
      this.props.history.push('/inicio')
   }

   // COMPONENT RENDERS
   render() {
      return (
         <div />
      )
   }
}

// EXPORT COMPONENT
export default RootHome
