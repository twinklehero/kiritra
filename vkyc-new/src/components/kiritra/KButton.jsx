import { Button, makeStyles } from '@material-ui/core'

export default function KButton({
  color = 'primary',
  variant = 'contained',
  title,
  children,
  ...rest
}) {
  const classes = useStyles()
  return (
    <Button color={color} variant={variant} {...rest} className={classes.btn}>
      {title}
      {!title && children}
    </Button>
  )
}

const useStyles = makeStyles((theme) => ({
  btn: {
    margin: '10px 10px',
  },
}))
KButton.muiName = Button.muiName
