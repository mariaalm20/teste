import { makeStyles } from '@material-ui/core/styles'

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
    flex: 1,
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
    color: '#fff',
  },

  listcolor: {
    color: '#ffff'
  },

  positionItems: {
    width: 790,
    marginLeft: 600,
    justifyContent: 'space-between',
    color: '#bbb'
  },

  text : {
    width: 400,
  },

  name : {
    marginTop: 10,
    fontWeight: 'bold'
  },

  icon : {
    marginTop: 5,
  }
}))

export default useStyles


