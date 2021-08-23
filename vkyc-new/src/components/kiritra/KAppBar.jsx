import {
  AppBar,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
} from '@material-ui/core'

export default function KAppBar({ name, title, ...rest }) {
  const classes = useStyles()
  return (
    <AppBar {...rest}>
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <Typography variant="h5">Bank Logo</Typography>
        </IconButton>
        <Typography variant="h5" className={classes.title}>
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

KAppBar.muiName = AppBar.muiName

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    marginLeft: '50px',
  },
}))
