import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer'
import { ThemeProvider } from '@material-ui/core/styles';

import logo from '../Assets/dash.svg'

import {Settings} from '@material-ui/icons'
import CardMembershipIcon from '@material-ui/icons/CardMembership'
import ContactsIcon from '@material-ui/icons/Contacts'
import PeopleIcon from '@material-ui/icons/People'
import DescriptionIcon from '@material-ui/icons/Description'
import DonutSmallIcon from '@material-ui/icons/DonutSmall'
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects'

import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail'
import { createMuiTheme } from '@material-ui/core/styles';

const themecustom = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#bbb',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    }},
    typography: {
    h1 : {
      fontSize : 15
    }
  }
  })




//themecustom = responsiveFontSizes(themecustom)

const drawerWidth = 300;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.primary.dark,
    padding: theme.spacing(3),
  },
}));

export default function Dawer() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >

     <ThemeProvider theme={themecustom}>
      <Typography  >
      <img src= {logo} alt = 'Logo' />
        Dashboard Kit
      </Typography>
      </ThemeProvider>

        <div className={classes.toolbar} />

        <List>
          {[ 'Oveview', 'Tickets', 'Ideas', 'Contacts', 'Agents', 'Articles'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{
               index == 0 ? <DonutSmallIcon/> :
               index == 1 ? <MailIcon /> :
               index == 2? <EmojiObjectsIcon /> :
               index == 3 ? <ContactsIcon />:
               index == 4? <PeopleIcon /> : 
               <DescriptionIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['Settings', 'Subscription'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{
                index == 0 ?  <Settings/> : <CardMembershipIcon />
              }
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      
    </div>
  );
}
