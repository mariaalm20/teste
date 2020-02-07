import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box';

import AddCircleIcon from '@material-ui/icons/AddCircle'
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginLeft: 360,
    marginTop: 50,
  },
  paper: {
    color: theme.palette.text.secondary,
    height: 300,
    width: 500,
    paddingLeft: 10,
    paddingTop: 10
  },
  h6 : {
    fontSize: 20,
    fontWeight: "bold",
    color: '#000',
  },
  h11: {
    fontSize: 10,
    marginLeft: 10,
  },
  
  img :{
    marginLeft: 0,
    marginTop: 30
  },
  formDay: {
    marginLeft: 550,
 
  },
  
  list: {
    marginLeft: 600
  },
  text : {
    color: '#000',
    marginTop: 10,
    alignItems: 'center'

  },
  h4 : {
    color: '#000',
    fontWeight: 'bold',
    marginTop: 5,
  },
  desc : {
    color: '#000',
    marginTop: 10
  }

}));

export default function Tickets() {
  const classes = useStyles()

  return (
    <div className={classes.root} >
  
  <Box display="flex" p={1} flexDirection = "row" >
  <Box p={1} >
   <Grid container spacing={3}>
   <Grid item xs={12}>
    <Paper className = {classes.paper}>
   
  <Box display="flex" >
   <Box p={1} flexGrow={1} className = {classes.h6}>
    Unresolved Tickets
    </Box>

    <Box p={1} color = "#3751FF">
      View details
    </Box>
    
  </Box>
     <Typography variant="h11" className = {classes.h11} >
        Group: <strong>Support</strong>
     </Typography>
  
    <Box display="flex" >
   <Box p={1} flexGrow={1} className = {classes.desc}>
    Wating on Feature Request
    </Box>

    <Box p={1} color = "#bbb">
      4238
    </Box>
    </Box>


    <Box display="flex" >
    <Box p={1} flexGrow={1} className = {classes.desc}>
    Awating Customer Response
    </Box>

    <Box p={1} color = "#bbb">
     1005
    </Box>
    </Box>

    <Box display="flex" >
    <Box p={1} flexGrow={1} className = {classes.desc}>
     Awating Developer Fix
    </Box>

    <Box p={1} color = "#bbb">
      914
    </Box>
    </Box>

    <Box display="flex" >
    <Box p={1} flexGrow={1} className = {classes.desc}>
    Peding
    </Box>
    <Box p={1} color = "#bbb">
      281
    </Box>
  </Box>


 </Paper>
  </Grid> 
  </Grid>
  </Box>

  <Box p={1} >
   <Grid container spacing={3}>
   <Grid item xs={12}>
    <Paper className = {classes.paper}>


   
 <Box display="flex" >
   <Box p={1} flexGrow={1} className = {classes.h6}>
    Taks
    </Box>

    <Box p={1} color = "#3751FF">
      View details
    </Box>
    
  </Box>
     <Typography variant="h11" className = {classes.h11} >
       Today
     </Typography>
  
    <Box display="flex" >
   <Box p={1} flexGrow={1} className = {classes.desc}>
    Create new task 
    </Box>

    <Box p={1} color = "#bbb">
      <AddCircleIcon />
    </Box>
    </Box>


    <Box display="flex" >
    <Box p={1} flexGrow={1} className = {classes.desc}>
    <RadioButtonUncheckedIcon />
    Finish ticket update
    </Box>

    <Box p={1} color = "#EEC900">
     Urgent
    </Box>
    </Box>

    <Box display="flex" >
    <Box p={1} flexGrow={1} className = {classes.desc}>
     <RadioButtonUncheckedIcon />
     Create new ticket example
    </Box>

    <Box p={1} color = "#00EE00">
      New
    </Box>
    </Box>

    <Box display="flex" >
    <Box p={1} flexGrow={1} className = {classes.desc}>
     <CheckCircleIcon />
     Update ticket report 
    </Box>
    <Box p={1} color = "#bbb">
      Default
    </Box>
  </Box>
 </Paper>
  </Grid> 
  </Grid>
  </Box>

  </Box>
  </div>

  )
}