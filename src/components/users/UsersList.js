// IMPORT LIBRARIES
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import {
   SetLoading,
   SetNotification
} from '../../store/system/actions'

// IMPORT UTILS
import axios from '../../utils/axios'

// IMPORT COMPONENTS
import {
   Table,
   TableBody,
   TableCell,
   TableHead,
   TableRow
} from '@material-ui/core'

// COMPONENT DEFINITION
class UsersList extends Component {
   // COMPONENT CONSTRUCTOR
   constructor(props) {
      super(props)
      this.state = {
         users: []
      }
   }

   // COMPONENT LIFECYCLE METHODS
   componentDidMount() {
      this.FetchUsers()
   }

   // COMPONENT METHODS
   FetchUsers = async () => {
      await this.props.SetLoading(true)
      try {
         const res = await axios.get('/customers/fetch-all')
         const users = []
         res.data.map((user) => {
            users.push({
               fullname: `${user.firstname} ${user.lastname}`,
               phone: user.phone,
               email: user.email,
               status: user.status
            })
         })
         users.sort((a, b) => {
            const nameA = a.fullname.toUpperCase()
            const nameB = b.fullname.toUpperCase()
            if (nameA < nameB) {
               return -1
             }
             if (nameA > nameB) {
               return 1
             }
             return 0
         })
         this.setState({
            users
         })
      } catch (error) {
         this.props.SetNotification({
            show: true,
            message: 'Ha ocurrido un error, por favor intenta de  nuevo'
         })
      }
      await this.props.SetLoading(false)
   }

   // COMPONENT RENDERS
   render() {
      return (
         <div>
            <Table>
               <TableHead>
                  <TableRow>
                     <TableCell>Nombre Completo</TableCell>
                     <TableCell>Teléfono</TableCell>
                     <TableCell>Email</TableCell>
                     <TableCell>Estado</TableCell>
                  </TableRow>
               </TableHead>
               <TableBody>
                  {
                     this.state.users.map((user) => {
                        return (
                           <TableRow>
                              <TableCell>
                                 { user.fullname }
                              </TableCell>
                              <TableCell>
                                 { user.phone }
                              </TableCell>
                              <TableCell>
                                 { user.email }
                              </TableCell>
                              <TableCell>
                                 { user.status ? 'Activo' : 'Inactivo' }
                              </TableCell>
                           </TableRow>
                        )
                     })
                  }
               </TableBody>
            </Table>
         </div>
      )
   }
}

// MAPPERS
const mapDispatchToProps = dispatch => ({
   ...bindActionCreators(
      {
         SetLoading,
         SetNotification
      },
      dispatch
   )
})

const mapStateToProps = state => ({
   store: state
 })

// EXPORT COMPONENT
export default connect(mapStateToProps, mapDispatchToProps)(UsersList)
