import green from '@material-ui/core/colors/green'

export default (theme: any): any => ({
  textField: {
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit,
  },
  button: {
    margin: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit
  },
  buttonProgress: {
    color: green[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
  root: {
    display: 'flex',
  }
})