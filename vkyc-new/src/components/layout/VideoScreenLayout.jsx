import React from 'react'
import { KGrid, KBox } from '../kiritra'
export function VideoScreenLayout({ children }) {
  return (
    <KGrid container item xs={12}>
      {children}
    </KGrid>
  )
}

export function VideoScreenLayoutColumn({ children }) {
  return (
    <KGrid item xs={6}>
      <KBox border={1}>{children}</KBox>
    </KGrid>
  )
}
export function VideoScreenLayoutColumnLeft({ children }) {
  return (
    <KGrid item xs={6}>
      <KBox border={1} align="center">
        {children}
      </KBox>
    </KGrid>
  )
}
export function VideoScreenLayoutColumnMid({ children }) {
  return (
    <KGrid item xs={1}>
      <KBox>{children}</KBox>
    </KGrid>
  )
}
export function VideoScreenLayoutColumnRight({ children }) {
  return (
    <KGrid item xs={5}>
      <KBox align="center">{children}</KBox>
    </KGrid>
  )
}
