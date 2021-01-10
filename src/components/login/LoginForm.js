// IMPORT COMPONENTS
import React, { Component } from 'react'
import {
   Grid,
   Card,
   TextField,
   Typography,
   Button
} from '@material-ui/core'

// IMPORT UTILS
import axios from '../../utils/axios'

// COMPONENT DEFINITION
class LoginForm extends Component {
   // COMPONENT CONSTRUCTOR
   constructor(props) {
      super(props)
      this.state = {
         target: 'login',
         form: {}
      }
   }

   // COMPONENT METHODS
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

   UpdateFormData = (target, value) => {
      this.setState({
         form: {
            ...this.state.form,
            [target]: value
         }
      })
   }

   SubmitForm = () => {
      if (this.ValidateForm()) {
         axios.post('/user/login', { ...this.form })
      }
   }

   ValidateForm = () => {
      const { fullname, email, password } = this.state.form
      let valid = true
      if (this.state.target === 'signup' && !fullname) {
         valid = false
      }
      if(!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)) {
         valid = false
      }
      if (password.length < 7) {
         valid = false
      }
      if (!/[\d]{1}/g.test(password)) {
         valid = false
      }
      return valid
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
                              onChange={
                                 (event) => this.UpdateFormData('fullname', event.target.value)
                              }
                           />
                        </Grid>
                     }
                     <Grid className="grid-margin" item xs={12}>
                        <TextField
                           label="Correo Electrónico"
                           variant="outlined"
                           fullWidth
                           onChange={
                              (event) => this.UpdateFormData('email', event.target.value)
                           }
                        />
                     </Grid>
                     <Grid className="grid-margin" item xs={12}>
                        <TextField
                           label="Contraseña"
                           variant="outlined"
                           type="password"
                           fullWidth
                           onChange={
                              (event) => this.UpdateFormData('password', event.target.value)
                           }
                        />
                     </Grid>
                     <Grid className="grid-margin" item xs={12}>
                        <Button
                           color="primary"
                           variant="contained"
                           fullWidth
                           onClick={ this.SubmitForm }
                        >
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
