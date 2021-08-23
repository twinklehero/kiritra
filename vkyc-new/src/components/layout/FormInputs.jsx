import React from 'react'
import { KBox } from '../kiritra'

export default function FormInputs({ children }) {
  return (
    <KBox display="flex" justifyContent="center" flexWrap="wrap">
      {children}
    </KBox>
  )
}
