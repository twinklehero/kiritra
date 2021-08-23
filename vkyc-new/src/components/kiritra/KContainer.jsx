import { Container } from '@material-ui/core'
import React from 'react'

const KContainer = ({ children, ...rest }) => {
  return <Container {...rest}>{children}</Container>
}

KContainer.muiName = Container.muiName

export default KContainer
