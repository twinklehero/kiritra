import {
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
} from '@material-ui/core'

const KSelect = ({ label, options, value, onChange, ...rest }) => {
  const classes = useStyles()
  return (
    <FormControl variant="outlined" {...rest} className={classes.inputField}>
      {label && <InputLabel id="demo-simple-select-label">{label}</InputLabel>}
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label={label ? label : undefined}
        value={value}
        onChange={onChange}
      >
        <MenuItem value={'Mr'}>Mr</MenuItem>
        <MenuItem value={'mrs'}>Mrs</MenuItem>
      </Select>
    </FormControl>
  )
}

KSelect.muiName = 'FormControl'

const useStyles = makeStyles((theme) => ({
  inputField: {
    margin: '10px 10px',
    width: 250,
  },
}))

export default KSelect
