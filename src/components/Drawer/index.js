import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer'

import logo from '../../Assets/dash.svg'
import avatar from '../../Assets/me.jpg'

import NotificationsIcon from '@material-ui/icons/Notifications'
import SearchIcon from '@material-ui/icons/Search'
import {Settings} from '@material-ui/icons'
import CardMembershipIcon from '@material-ui/icons/CardMembership'
import ContactsIcon from '@material-ui/icons/Contacts'
import PeopleIcon from '@material-ui/icons/People'
import DescriptionIcon from '@material-ui/icons/Description'
import DonutSmallIcon from '@material-ui/icons/DonutSmall'
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects'

import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail'
import Box from '@material-ui/core/Box'




//themecustom = responsiveFontSizes(themecustom)

const drawerWidth = 300;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    backgroundColor: '#fff',
    color: '#000',
    flex:1,
    flexDirection: "column"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#363740'
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.primary.dark,
    padding: theme.spacing(3),
  },
  size: {
    marginTop: 50,
    marginLeft: 20,
    fontSize: 20,
    color : '#fff',
    
  },
  listcolor: {
    color: '#ffff'
  },
  positionItems : {
    marginLeft: 740,
    justifyContent: 'space-between',
    color: '#bbb'
  }
}));

export default function Dawer({ navigation }) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar >
          <Typography variant="h6" noWrap>
            Overview
          </Typography>
        
      <Box display="flex" flexDirection="row" p={1} m={1} className = {classes.positionItems} >
        <Box p={1}>
        <SearchIcon />
        </Box>
        <Box p={1}>
        <NotificationsIcon />
        </Box>
        <Box p={1} color = "#000" >
        Maria Fernanda
        </Box>
        <Box p={1} >
        <Avatar src = {avatar} alt = "Avatar" />
        </Box>
       </Box>
    
         
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
     <Box display="flex" flexDirection="row" p={1} m={1} className = {classes.size}>
        <Box p={1}>
        <img src = {logo} alt = "Logo"/>
        </Box>
        <Box p={1} >
        Dashboard Kit
        </Box>
    </Box>
  

        <div className={classes.toolbar} />

        <List className = {classes.listcolor}>
          {[ 'Oveview', 'Tickets', 'Ideas', 'Contacts', 'Agents', 'Articles'].map((text, index) => (
            <ListItem button key={text}  onPress={() => navigation.navigate('List')}            >
              <ListItemIcon className = {classes.listcolor}>{
               index == 0 ? <DonutSmallIcon/>  :
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
        <List className = {classes.listcolor}>
          {['Settings', 'Subscription'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon className = {classes.listcolor}>{
                index == 0 ?  <Settings/> : <CardMembershipIcon />
              }
              </ListItemIcon >
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      
    </div>
  );
}
