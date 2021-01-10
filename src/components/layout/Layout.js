// IMPORT LIBRARIES
import React, { Component, Fragment } from 'react'
import {
   Drawer,
   List,
   ListItem,
   ListItemIcon,
   ListItemText
} from '@material-ui/core'

// IMPORT IMAGES
import logo from '../../static/logo.png'

// COMPONENT DEFINITION
class Layout extends Component {
   // COMPONENT RENDERS
   render() {
      return (
         <Fragment>
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
                     </ListItemIcon>
                     <ListItemText
                        className="nav-button"
                        primary="Tareas"
                     />
                  </ListItem>
               </List>
            </Drawer>
         </Fragment>
      )
   }
}

// EXPORT COMPONENT
export default Layout
