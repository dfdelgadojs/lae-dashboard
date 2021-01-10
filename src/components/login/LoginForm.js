// IMPORT COMPONENTS
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
   Grid,
   Card,
   TextField,
   Typography,
   Button
} from '@material-ui/core'

// IMPORT ACTION CREATORS
import {
   SetLoading,
   SetNotification,
   SetUserData,
   SetLoggedIn
} from '../../store/system/actions'

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

   // COMPONENT LIFECYCLE METHODS
   componentDidMount() {
      this.ValidateToken()
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

   SubmitForm = async () => {
      if (this.ValidateForm()) {
         await this.props.SetLoading(true)
         try {
            let route = ''
            if (this.state.target === 'login') {
               route = '/user/login'
            } else {
               route = '/user/signup'
            }
            const res = await axios.post(route, {
               ...this.state.form
            })
            sessionStorage.setItem('UserToken', res.data)
            this.ValidateToken()
         } catch (error) {
            this.props.SetNotification({
               show: true,
               message: 'Ha ocurrido un error, por favor intenta de  nuevo'
            })
         }
         await this.props.SetLoading(true)
      }
   }

   ValidateForm = () => {
      const { fullname, email, password } = this.state.form
      let valid = true
      let message = ''
      if (this.state.target === 'signup' && !fullname) {
         valid = false
         message = 'Por favor ingresa tu nombre'
      }
      if(!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)) {
         valid = false
         message = 'Formato de correo incorrecto'
      }
      if (!password || password.length < 7) {
         valid = false
         message = 'Tu contraseña debe tener mínimo 7 caracteres'
      }
      if (!/[\d]{1}/g.test(password)) {
         valid = false
         message = 'Tu contraseña debe tener mínimo un número'
      }
      if (!valid) {
         this.props.SetNotification({
            show: true,
            message
         })
      }
      return valid
   }

   ValidateToken = async () => {
      const token = sessionStorage.getItem('UserToken')
      if (token) {
         try {
            const res = await axios.get('/user/data', {
               headers: {
                  authorization: `Bearer ${token}`
               }
            })
            await this.props.SetUserData(res.data)
            await this.props.SetLoggedIn(true)
            this.props.history.push('/inicio')
         } catch (error) {
            this.props.SetNotification({
               show: true,
               message: 'Ha ocurrido un error, por favor intenta de  nuevo'
            })
         }
      }
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

// STORE MAPPERS
const mapDispatchToProps = dispatch => ({
   ...bindActionCreators(
      {
         SetLoading,
         SetNotification,
         SetUserData,
         SetLoggedIn
      },
      dispatch
   )
})

// EXPORT COMPONENT
export default connect(null, mapDispatchToProps)(LoginForm)
