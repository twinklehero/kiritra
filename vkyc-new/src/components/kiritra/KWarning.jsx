import { makeStyles } from '@material-ui/core'
import Alert from '@material-ui/lab/Alert'

export default function KWarning({
  children,
  text,
  severity = 'error',
  ...rest
}) {
  const classes = useStyles()
  return (
    <Alert severity={severity} {...rest} className={classes.alert}>
      {text}
      {!text && children}
    </Alert>
  )
}

KWarning.muiName = Alert.muiName

const useStyles = makeStyles((theme) => ({
  alert: {
    margin: '20px',
    justifyContent: 'center',
  },
}))
