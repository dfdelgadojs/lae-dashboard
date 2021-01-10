// IMPORT LIBRARIES
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
   Snackbar
} from '@material-ui/core'

// IMPORT ACTION CREATORS
import { SetNotification } from '../../store/system/actions'

// COMPONENT DEFINITION
class Notification extends Component {
   // COMPONENT RENDERS
   render() {
      return (
         <Snackbar
            open={ this.props.store.system.notification.show }
            message={ this.props.store.system.notification.message }
            autoHideDuration={6000}
            onClose={() => this.props.SetNotification({
               show: false,
               message: ''
            })}
         />
      )
   }
}

// STORE MAPPERS
const mapDispatchToProps = dispatch => ({
   ...bindActionCreators(
      {
         SetNotification
      },
      dispatch
   )
})

 const mapStateToProps = state => ({
   store: state
 })

// EXPORT COMPONENT
export default connect(mapStateToProps, mapDispatchToProps)(Notification)
