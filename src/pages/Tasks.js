// IMPORT LIBRARIES
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// IMPORT COMPONENTS
import ToDoTasks from '../components/tasks/ToDoTasks'

// ACTION CREATORS
import {
   SetPage
} from '../store/system/actions'

// COMPONENT DEFINITION
class TasksPage extends Component {
   // COMPONENT LIFECYCLE METHODS
   componentDidMount() {
      if (!this.props.store.system.loggedIn) {
         this.props.history.push('/login')
      }
      this.props.SetPage('Tareas')
   }

   // COMPONENT RENDERS
   render() {
      return (
         <div className="route-padding">
            <ToDoTasks />
         </div>
      )
   }
}

// MAPPERS
const mapDispatchToProps = dispatch => ({
   ...bindActionCreators(
      {
         SetPage
      },
      dispatch
   )
})

const mapStateToProps = state => ({
   store: state
 })

// EXPORT COMPONENT
export default connect(mapStateToProps, mapDispatchToProps)(TasksPage)
