import { Typography } from '@material-ui/core'

export default function KTypography({ variant = 'body1', children, ...rest }) {
  return (
    <Typography variant={variant} {...rest}>
      {children}
    </Typography>
  )
}
