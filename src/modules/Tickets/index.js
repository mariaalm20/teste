import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box';

import AddCircleIcon from '@material-ui/icons/AddCircle'
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'

import useStyles from './styles'

export default function Tickets() {
  const classes = useStyles()

  return (
    <div className={classes.root} >

      <Box display="flex" p={1} flexDirection="row" >
        <Box p={1} >
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper className={classes.paper}>

                <Box display="flex" >
                  <Box p={1} flexGrow={1} className={classes.h6}>
                    Unresolved Tickets
                  </Box>

                  <Box p={1} color="#3751FF">
                    View details
                  </Box>

                </Box>
                <Typography variant="h11" className={classes.h11} >
                  Group: <strong>Support</strong>
                </Typography>

                <Box display="flex" >
                  <Box p={1} flexGrow={1} className={classes.desc}>
                    Wating on Feature Request
                  </Box>

                  <Box p={1} color="#bbb" style = {{marginTop: 10}}>
                    4238
                  </Box>
                </Box>


                <Box display="flex" >
                  <Box p={1} flexGrow={1} className={classes.desc}>
                    Awating Customer Response
                  </Box>

                  <Box p={1} color="#bbb" style = {{marginTop: 10}}>
                    1005
                  </Box>
                </Box>

                <Box display="flex" >
                  <Box p={1} flexGrow={1} className={classes.desc}>
                    Awating Developer Fix
                  </Box>

                  <Box p={1} color="#bbb" style = {{marginTop: 10}}>
                    914
                  </Box>
                </Box>

                <Box display="flex" >
                  <Box p={1} flexGrow={1} className={classes.desc}>
                    Peding
                  </Box>
                  <Box p={1} color="#bbb" style = {{marginTop: 10}}>
                    281
                  </Box>
                </Box>


              </Paper>
            </Grid>
          </Grid>
        </Box>

        <Box p={1} style={{ marginLeft: 30 }}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper className={classes.paper}>



                <Box display="flex" >
                  <Box p={1} flexGrow={1} className={classes.h6}>
                    Taks
                  </Box>

                  <Box p={1} color="#3751FF">
                    View details
                </Box>

                </Box>
                <Typography variant="h11" className={classes.h11} >
                  Today
                </Typography>

                <Box display="flex" >
                  <Box p={1} flexGrow={1} className={classes.desc}>
                    Create new task
                  </Box>

                  <Box p={1} color="#bbb">
                    <AddCircleIcon />
                  </Box>
                </Box>


                <Box display="flex" >
                  <Box p={1} flexGrow={1} className={classes.desc}>
                    <RadioButtonUncheckedIcon style = {{marginRight: 10}}/>
                    Finish ticket update
                  </Box>

                  <Box p={1} color="#EEC900" style = {{fontWeight: 'bold'}}>
                    Urgent
                  </Box>
                </Box>

                <Box display="flex" >
                  <Box p={1} flexGrow={1} className={classes.desc}>
                    <RadioButtonUncheckedIcon style = {{
                      marginRight: 10,
                    }}/>
                  Create new ticket example
                 </Box>

                  <Box p={1} color="#00EE00" style = {{fontWeight: 'bold'}}>
                    New
                 </Box>
                </Box>

                <Box display="flex" >
                  <Box p={1} flexGrow={1} className={classes.desc}>
                    <CheckCircleIcon style = {{marginRight: 10}} />
                   Update ticket report
                  </Box>
                  <Box p={1} color="#bbb" style = {{fontWeight: 'bold'}}>
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