import React, { useState } from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

import Gridd from '../../modules/Grid'
import Tickets from '../../modules/Tickets'
import Drawer from '../../components/Drawer'



const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: 130,
    marginLeft: 160,
  },
  paper: {
    height: 140,
    width: 200,
    paddingTop: 20,
    paddingLeft: 60

  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function Homer() {
  const [spacing, setSpacing] = useState(10)
  const classes = useStyles()

  const handleChange = event => {
    setSpacing(Number(event.target.value))
  };

  return (
    <>
      <Drawer />
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={spacing}>
            {[0, 1, 2, 3].map(value => (
              <Grid key={value} item>
                <Paper className={classes.paper}>
                  {
                    value == 0 ? (
                      <>
                        <Typography variant="h7" noWrap >
                          Unresolved
                 </Typography>
                        <Typography variant="h2" noWrap >
                          60
                </Typography>
                      </>) :
                      value == 1 ? (
                        <>
                          <Typography variant="h7" noWrap >
                            Overdue
                   </Typography>
                          <Typography variant="h2" noWrap >
                            16
                  </Typography>
                        </>) :
                        value == 2 ? (
                          <>
                            <Typography variant="h7" noWrap >
                              Open
                   </Typography>
                            <Typography variant="h2" noWrap >
                              43
                  </Typography>
                          </>) :
                          (
                            <>
                              <Typography variant="h7" noWrap >
                                On hold
                   </Typography>
                              <Typography variant="h2" noWrap >
                                64
                  </Typography>
                            </>)
                  }
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>

      <Gridd />
      <Tickets />

    </>
  )
}
