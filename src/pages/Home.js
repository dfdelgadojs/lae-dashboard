// IMPORT LIBRARIES
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// IMPORT COMPONENTS
import {
   Grid,
   Typography
} from '@material-ui/core'

// IMPORT IMAGES
import image from '../static/login.jpg'

// ACTION CREATORS
import {
   SetPage
} from '../store/system/actions'

// COMPONENT DEFINITION
class HomePage extends Component {
   // COMPONENT LIFECYCLE METHODS
   componentDidMount() {
      if (!this.props.store.system.loggedIn) {
         this.props.history.push('/login')
      }
      this.props.SetPage('Inicio')
   }

   // COMPONENT RENDERS
   render() {
      return (
         <div className="route-padding">
            <Grid container>
               <Grid className="justify-center" item xs={12}>
                  <Typography variant="h4">
                     {
                        `Bienvenido ${this.props.store.system.user.fullname}`
                     }
                  </Typography>
               </Grid>
               <Grid item xs={12}>
                  <img className="home-image" src={image} />
               </Grid>
            </Grid>
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
export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
