// IMPORT LIBRARIES
import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import {
   Drawer,
   List,
   ListItem,
   ListItemIcon,
   ListItemText,
   AppBar,
   Grid,
   Typography
} from '@material-ui/core'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUsers, faTasks, faCog, faBell, faSearch } from '@fortawesome/free-solid-svg-icons'

// IMPORT IMAGES
import logo from '../../static/logo.png'

// COMPONENT DEFINITION
class Layout extends Component {
   // COMPONENT RENDERS
   render() {
      if (this.props.store.system.loggedIn) {
         return (
               <Fragment>
                  <AppBar className="app-bar" position="static">
                     <Grid container>
                        <Grid className="breadcrumb" item xs={6}>
                           <Typography variant="h5">
                              Inicio
                           </Typography>
                        </Grid>
                        <Grid className="user-app-name" item xs={6}>
                           <FontAwesomeIcon
                              className="nav-icon"
                              size="lg"
                              color="#424242"
                              icon={ faSearch }
                           />
                           <FontAwesomeIcon
                              className="nav-icon"
                              size="lg"
                              color="#424242"
                              icon={ faBell }
                           />
                           <Typography color="primary">
                              {
                                 this.props.store.system.user.fullname
                              }
                           </Typography>
                        </Grid>
                     </Grid>
                  </AppBar>
                  <Drawer
                     variant="persistent"
                     className="drawer drawer-container"
                     classes={{ paper: 'drawer' }}
                     open={true}
                  >
                     <div className="logo-container">
                        <img src={logo} />
                     </div>
                     <List>
                        <ListItem
                           button
                           onClick={
                              () => this.props.history.push('/inicio')
                           }
                        >
                           <ListItemIcon>
                              <FontAwesomeIcon color="white" icon={ faHome } />
                           </ListItemIcon>
                           <ListItemText
                              className="nav-button"
                              primary="Inicio"
                           />
                        </ListItem>
                        <ListItem
                           button
                           onClick={
                              () => this.props.history.push('/usuarios')
                           }
                        >
                           <ListItemIcon>
                              <FontAwesomeIcon color="white" icon={ faUsers } />
                           </ListItemIcon>
                           <ListItemText
                              className="nav-button"
                              primary="Usuarios"
                           />
                        </ListItem>
                        <ListItem
                           button
                           onClick={
                              () => this.props.history.push('/tareas')
                           }
                        >
                           <ListItemIcon>
                           <FontAwesomeIcon color="white" icon={ faTasks } />
                           </ListItemIcon>
                           <ListItemText
                              className="nav-button"
                              primary="Tareas"
                           />
                        </ListItem>
                     </List>
                     <div className="bottom-menu">
                        <List>
                           <ListItem
                              button
                              onClick={
                                 () => this.props.history.push('/configuracion')
                              }
                           >
                              <ListItemIcon>
                                 <FontAwesomeIcon color="white" icon={ faCog } />
                              </ListItemIcon>
                              <ListItemText
                                 className="nav-button"
                                 primary="Configuración"
                              />
                           </ListItem>
                        </List>
                     </div>
                  </Drawer>
               </Fragment>
         )
      } else {
         return <div />
      }
   }
}

const mapStateToProps = state => ({
   store: state
})

// EXPORT COMPONENT
export default connect(mapStateToProps, null)(Layout)
