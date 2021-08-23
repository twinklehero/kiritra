import { makeStyles, TextField } from '@material-ui/core'
import React from 'react'

export default function KTextField({ autoComplete, label, required, ...rest }) {
  const classes = useStyles()

  return (
    <TextField
      autoComplete={autoComplete}
      label={label}
      required={required}
      variant="outlined"
      className={classes.inputField}
      {...rest}
    />
  )
}

KTextField.muiName = TextField.muiName

const useStyles = makeStyles((theme) => ({
  inputField: {
    margin: '10px 10px',
    width: 250,
  },
}))
