import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginLeft: 360,
    marginTop: 50,
  },
  paper: {
    color: theme.palette.text.secondary,
    height: 550,
    width: 725,
    paddingLeft: 10,
    paddingTop: 10
  },
  h6: {
    fontSize: 20,
    fontWeight: "bold",
    color: '#000',
    marginLeft: 10,
  },
  h11: {
    fontSize: 10,
    marginLeft: 10
  },

  img: {
    marginLeft: 10,
    marginTop: 30
  },
  formDay: {
    marginLeft: 570,

  },

  list: {
    marginLeft: 600
  },
  text: {
    color: '#000',
    marginTop: 10,
    alignItems: 'center'

  },
  h4: {
    color: '#000',
    fontWeight: 'bold',
    marginTop: 5,
  },

  box: {
    marginTop: 10
  }

}))

export default useStyles