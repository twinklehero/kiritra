import Alert from '@material-ui/lab/Alert'
import { makeStyles } from '@material-ui/styles'
import React from 'react'

export default function KCaption({ text, children, ...rest }) {
  const classes = useStyles()
  return (
    <Alert severity="info" className={classes.alert} {...rest}>
      {text}
      {!text && children}
    </Alert>
  )
}

KCaption.muiName = Alert.muiName

const useStyles = makeStyles((theme) => ({
  alert: {
    margin: '20px 0',
    justifyContent: 'center',
  },
}))
