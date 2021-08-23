import React, { useState } from 'react'
import { useContext } from 'react'
import { ScreensStateMachineContext } from '../../state/ScreensStateProvider'
import {
  KBox,
  KButton,
  KCaption,
  KSelect,
  KTextField,
  KTypography,
} from '../kiritra'
import {
  ApplicationLayout,
  ApplicationLayoutLeft,
  ApplicationLayoutRight,
} from '../layout/ApplicationLayout'
import { FormControlLabel } from '@material-ui/core'
import FormInstructions from '../layout/FormInstructions'
import ScreenLayout from '../layout/ScreenLayout'
import { makeStyles } from '@material-ui/styles'
const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  extendedIcon: {},
})
export default function PersonalDetails() {
  const { screensServices } = useContext(ScreensStateMachineContext)
  const classes = useStyles()
  return (
    <ScreenLayout>
      <FormInstructions padding={false}>
        <KTypography variant="h5" align="center">
          Loan Document
        </KTypography>
      </FormInstructions>

      <KBox align="center" border={1}>
        <FormInstructions padding={false}>
          <KTypography variant="h6" align="center">
            Here is a Loan Agreement Document.Please attach Your Digital
            signature at the end and initials on each page.
          </KTypography>
        </FormInstructions>
      </KBox>
      <KBox align="center" border={1}>
        <FormInstructions>
          <KTypography variant="h5" align="center">
            Please di let us know if there is anything we can help you with{' '}
          </KTypography>
        </FormInstructions>
      </KBox>
    </ScreenLayout>
  )
}
