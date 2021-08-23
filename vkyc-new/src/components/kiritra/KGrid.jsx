import { Grid } from '@material-ui/core'
import React from 'react'

export default function KGrid({ children, ...rest }) {
  return <Grid {...rest}>{children}</Grid>
}

KGrid.muiName = Grid.muiName
