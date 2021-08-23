import React from 'react'
import { KAppBar, KContainer } from '../kiritra'

export default function MainLayout({ children }) {
  return (
    <>
      <KAppBar name="John Albery" title="Bank Name" position="static" />

      <KContainer maxWidth="md">{children}</KContainer>
    </>
  )
}
