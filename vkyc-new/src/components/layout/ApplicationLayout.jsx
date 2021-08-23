import React from 'react'
import { KGrid, KBox } from '../kiritra'
export function ApplicationLayout({ children }) {
  return (
    <KGrid container item xs={12}>
      {children}
    </KGrid>
  )
}

export function ApplicationLayoutLeft({ children }) {
  return (
    <KGrid item xs={6}>
      <KBox border={0} align="center">
        {children}
      </KBox>
    </KGrid>
  )
}
export function ApplicationLayoutRight({ children }) {
  return (
    <KGrid item xs={6}>
      <KBox border={0} align="center">
        {children}
      </KBox>
    </KGrid>
  )
}
