import React from 'react'
import { KBox } from '../kiritra'

export default function FormInstructions({ padding = true, children }) {
  return <KBox paddingY={padding ? '80px' : '0px'}>{children}</KBox>
}
