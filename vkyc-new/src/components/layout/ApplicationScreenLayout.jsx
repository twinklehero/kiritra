import React from 'react'
import { KGrid, KBox } from '../kiritra'
export function ApplicationScreenLayout({ children }) {
  return (
    <KGrid container item xs={12}>
      {children}
    </KGrid>
  )
}

export function ApplicationScreenLayoutColumnLeft({ children }) {
  return (
    <KGrid item xs={8}>
      <KBox>{children}</KBox>
    </KGrid>
  )
}
export function ApplicationScreenLayoutColumnRight({ children }) {
  return (
    <KGrid item xs={4}>
      <KBox align="center">{children}</KBox>
    </KGrid>
  )
}
export function ApplicationScreenLayoutColumnLeftthirdstart({ children }) {
  return (
    <KGrid item xs={0}>
      <KBox>{children}</KBox>
    </KGrid>
  )
}
export function ApplicationScreenLayoutColumnLeftthirdmid({ children }) {
  return (
    <KGrid item xs={6}>
      <KBox>{children}</KBox>
    </KGrid>
  )
}
export function ApplicationScreenLayoutColumnLeftthirdlast({ children }) {
  return (
    <KGrid item xs={6}>
      <KBox align="center">{children}</KBox>
    </KGrid>
  )
}
