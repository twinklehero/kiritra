import DateFnsUtils from '@date-io/date-fns'
import {
  KeyboardDateTimePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers'
import React from 'react'

function KDateTimePicker({ label, defaultValue, value, onChange, ...rest }) {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDateTimePicker
        variant="inline"
        ampm={false}
        label={label}
        value={value}
        onChange={onChange}
        onError={console.log}
        disablePast
        format="yyyy/MM/dd HH:mm"
      />
    </MuiPickersUtilsProvider>
  )
}

export default KDateTimePicker
