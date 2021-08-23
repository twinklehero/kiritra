import { makeStyles } from '@material-ui/core'
import React from 'react'
import { KCard } from '../kiritra'

export default function ScreenLayout({ children }) {
  const classes = useStyles()
  return <KCard className={classes.mainContainer}>{children}</KCard>
}

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    padding: 50,
    margin: '50px 0',
  },
}))
