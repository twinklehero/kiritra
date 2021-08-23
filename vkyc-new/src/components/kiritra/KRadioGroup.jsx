import React from 'react'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'

export default function KRadioGroup({
  label,
  value,
  onChange,
  options,
  ...rest
}) {
  return (
    <FormControl component="fieldset" {...rest}>
      <FormLabel component="legend">{label}</FormLabel>
      <RadioGroup value={value} onChange={onChange}>
        {options.map((option) => (
          <FormControlLabel
            value={option.value}
            control={<Radio />}
            label={option.label}
            disabled={option.disabled}
            key={option.value}
          />
        ))}
      </RadioGroup>
    </FormControl>
  )
}

KRadioGroup.muiName = FormControl.muiName
