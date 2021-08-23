import React from 'react'
import {
  KeyboardTimePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'

function KTimePicker({ label, value, onChange, ...rest }) {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardTimePicker
        label={label}
        mask="__:__ _M"
        value={value}
        onChange={onChange}
      />
    </MuiPickersUtilsProvider>
  )
}

export default KTimePicker
