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

export default function PersonalDetails() {
  const { screensServices } = useContext(ScreensStateMachineContext)

  return (
    <ScreenLayout>
      <FormInstructions padding={false}>
        <KTypography variant="h5" align="center">
          Bank Account Verification
        </KTypography>
      </FormInstructions>

      <KBox align="center" border={1}>
        <FormInstructions padding={false}>
          <KTypography variant="h6" align="center">
            Your Bank Account has been successfully Validated
          </KTypography>
        </FormInstructions>

        <KButton onClick={() => screensServices.send('loan-document')}>
          Proceed
        </KButton>
      </KBox>
    </ScreenLayout>
  )
}
