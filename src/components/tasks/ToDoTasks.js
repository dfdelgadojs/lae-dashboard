// IMPORT LIBRARIES
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// IMPORT COMPONENTS
import {
   Grid,
   Card,
   TextField,
   Typography,
   Button
} from '@material-ui/core'

// ACTION CREATORS
import {
   SetLoading,
   SetNotification,
   SetTasks
} from '../../store/system/actions'

// IMPORT UTILS
import axios from '../../utils/axios'

// COMPONENT DEFINITION
class ToDoTasks extends Component {
   // COMPONENT CONSTRUCTOR
   constructor(props) {
      super(props)
      this.state = {
         task: null,
         tasks: [],
         current: null
      }
   }

   // COMPONENT LIFECYCLE METHODS
   componentDidMount() {
      this.FetchTasks()
   }

   // COMPONENT METHODS
   FetchTasks = async () => {
      await this.props.SetLoading(true)
      try {
         const res = await axios.get('/task')
         this.setState({
            tasks: res.data
         })
         this.props.SetTasks(res.data.length)
      } catch (error) {
         this.props.SetNotification({
            show: true,
            message: 'Ha ocurrido un error, por favor intenta de  nuevo'
         })
      }
      await this.props.SetLoading(false)
   }

   SaveTask = async () => {
      if (this.state.task) {
         await this.props.SetLoading(true)
         try {
            if (this.state.current) {
               await axios.put('/task', {
                  title: this.state.task,
                  id: this.state.current
               })
            } else {
               await axios.post('/task', {
                  title: this.state.task
               })
            }
            this.FetchTasks()
         } catch (error) {
            this.props.SetNotification({
               show: true,
               message: 'Ha ocurrido un error, por favor intenta de  nuevo'
            })
         }
         await this.props.SetLoading(false)
         this.setState({
            task: '',
            current: null
         })
      }
   }

   DeleteTask = async (id) => {
      await this.props.SetLoading(true)
      try {
         await axios.delete('/task', {
            params: {
               id
            }
         })
         this.FetchTasks()
      } catch(error) {
         this.props.SetNotification({
            show: true,
            message: 'Ha ocurrido un error, por favor intenta de  nuevo'
         })
      }
   }

   // COMPONENT RENDERS
   render() {
      return (
         <div>
            <Grid container>
               <Grid className="grid-margin" item xs={10}>
                  <TextField
                     label="Tarea"
                     variant="outlined"
                     fullWidth
                     value={ this.state.task }
                     onChange={
                        (event) => this.setState({ task: event.target.value })
                     }
                  />
               </Grid>
               <Grid  className="grid-margin" item xs={12}>
                  <Button
                     color="primary"
                     variant="outlined"
                     onClick={ this.SaveTask }
                  >
                     Guardar
                  </Button>
               </Grid>
               <Grid item xs={12}>
                  <Grid container>
                     {
                        this.state.tasks.map((task, i) => {
                           return (
                              <Grid item xs={12} key={i}>
                                 <Card className="task-container">
                                    <Grid container>
                                       <Grid item xs={4}>
                                          <Typography>
                                             { task.title }
                                          </Typography>
                                       </Grid>
                                       <Grid item xs={8}>
                                          <Button
                                             color="primary"
                                             variant="outlined"
                                             className="button-margin"
                                             onClick={
                                                () => this.setState({
                                                   task: task.title,
                                                   current: task._id
                                                })
                                             }
                                          >
                                             Editar
                                          </Button>
                                          <Button
                                             color="red"
                                             variant="outlined"
                                             onClick={
                                                () => this.DeleteTask(task._id)
                                             }
                                          >
                                             Eliminar
                                          </Button>
                                       </Grid>
                                    </Grid>
                                 </Card>
                              </Grid>
                           )
                        })
                     }
                  </Grid>
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
         SetLoading,
         SetNotification,
         SetTasks
      },
      dispatch
   )
})

const mapStateToProps = state => ({
   store: state
 })

// EXPORT COMPONENT
export default connect(mapStateToProps, mapDispatchToProps)(ToDoTasks)
