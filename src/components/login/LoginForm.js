// IMPORT COMPONENTS
import React, { Component, Fragment } from 'react'
import {
   Grid,
   Card,
   TextField,
   Typography,
   Button
} from '@material-ui/core'

// COMPONENT DEFINITION
class LoginForm extends Component {
   // COMPONENT CONSTRUCTOR
   constructor(props) {
      super(props)
      this.state = {
         target: 'login'
      }
   }

   SwitchTarget = () => {
      let newTarget = ''
      if (this.state.target === 'login') {
         newTarget = 'signup'
      } else {
         newTarget = 'login'
      }
      this.setState({
         target: newTarget
      })
   }

   // COMPONENT RENDERS
   render() {
      return (
         <Grid container className="login-form-container">
            <Grid item xs={1} lg={4} />
            <Grid item xs={10} lg={4}>
               <Card className="card-padding">
                  <Grid container>
                     <Grid className="card-title" item xs={12}>
                        <Typography>
                           {
                              this.state.target === 'login'
                                 ? 'Iniciar Sesión'
                                 : 'Crear Cuenta'
                           }
                        </Typography>
                     </Grid>
                     {
                        this.state.target === 'signup' &&
                        <Grid className="grid-margin" item xs={12}>
                           <TextField
                              label="Nombre Completo"
                              variant="outlined"
                              fullWidth
                           />
                        </Grid>
                     }
                     <Grid className="grid-margin" item xs={12}>
                        <TextField
                           label="Correo Electrónico"
                           variant="outlined"
                           fullWidth
                        />
                     </Grid>
                     <Grid className="grid-margin" item xs={12}>
                        <TextField
                           label="Contraseña"
                           variant="outlined"
                           type="password"
                           fullWidth
                        />
                     </Grid>
                     <Grid className="grid-margin" item xs={12}>
                        <Button color="primary" variant="contained" fullWidth>
                           {
                              this.state.target === 'login'
                                 ? 'Ingresar'
                                 : 'Crear'
                           }
                        </Button>
                     </Grid>
                     <Grid className="grid-margin" item xs={12}>
                        <Button
                           color="primary"
                           variant="outlined"
                           onClick={ this.SwitchTarget }
                        >
                           {
                              this.state.target === 'login'
                                 ? 'Crear Cuenta'
                                 : 'Iniciar Sesión'
                           }
                        </Button>
                     </Grid>
                  </Grid>
               </Card>
            </Grid>
            <Grid item xs={1} lg={4} />
         </Grid>
      )
   }
}

// EXPORT COMPONENT
export default LoginForm
