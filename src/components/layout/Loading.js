// IMPORT LIBRARIES
import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
   Dialog,
   CircularProgress
} from '@material-ui/core'

// COMPONENT DEFINITION
class Loading extends Component {
   // COMPONENT RENDERS
   render() {
      return (
         <Dialog open={ this.props.store.system.loading }>
            <CircularProgress className="progress" />
         </Dialog>
      )
   }
}

 const mapStateToProps = state => ({
   store: state
 })

// EXPORT COMPONENT
export default connect(mapStateToProps, null)(Loading)
