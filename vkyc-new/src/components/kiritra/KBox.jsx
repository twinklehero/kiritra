import { Box } from '@material-ui/core'
import React from 'react'

const KBox = ({ children, ...rest }) => {
  return <Box {...rest}>{children}</Box>
}

KBox.muiName = Box.muiName

export default KBox
