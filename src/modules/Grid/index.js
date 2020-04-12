import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';

import grafico from '../../Assets/grafico.png'
import useStyles from './styles'

export default function Gridd() {
  const classes = useStyles()

  return (
    <div className={classes.root} >

      <Box display="flex" p={1} >
        <Box p={1} width="73%">
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper>
                <Typography variant="h6" noWrap className={classes.h6}  >
                  Today's Tranding
                </Typography>

                <Typography variant="h11" className={classes.h11} >
                  as of 25 May 2019, 09:41 PM
                </Typography>

                <Box display="flex" flexDirection="row" className={classes.formDay} >
                  <Box p={1} color="#3751FF" >
                    Today
                </Box>
                  <Box p={1} >
                    Yesterday
                </Box>
                </Box>

                <img src={grafico} className={classes.img} />
              </Paper>
            </Grid>
          </Grid>
        </Box>

        <Divider orientation="vertical" />

        <Box p={1} bgcolor="#fff" className = {classes.box}>
          <Typography variant="h6" noWrap className={classes.text}  >
            Resolved
          </Typography>
          <Typography variant="h4" className={classes.h4} >
            449
          </Typography>

          <Typography variant="h6" className={classes.text} >
            Received
          </Typography>
          <Typography variant="h4" className={classes.h4} >
            426
          </Typography>

          <Typography variant="h6" noWrap className={classes.text}  >
           Average first response time
          </Typography>
          <Typography variant="h4" className={classes.h4} >
            33m
          </Typography>

          <Typography variant="h6" className={classes.text} >
            Average response time
          </Typography>
          <Typography variant="h4" className={classes.h4} >
            3h 8m
          </Typography>

          <Typography variant="h6" noWrap className={classes.text}  >
            Resolution within SLA
          </Typography>
          <Typography variant="h4" className={classes.h4} >
            94%
          </Typography>
        </Box>
       </Box>
   </div>
  )
}
