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

import FormInstructions from '../layout/FormInstructions'
import ScreenLayout from '../layout/ScreenLayout'

export default function PersonalDetails() {
  const { screensServices } = useContext(ScreensStateMachineContext)

  return (
    <ScreenLayout>
      <FormInstructions>
        <KTypography variant="h5" align="center">
          Credit Score Verification
        </KTypography>
      </FormInstructions>
      <FormInstructions>
        <KTypography variant="h6" align="center">
          Based on your PAN number the following is your Credit card score
        </KTypography>
        <KTypography variant="h4" align="center">
          785
        </KTypography>
      </FormInstructions>
      <KBox align="center">
        <KButton onClick={() => screensServices.send('loan-approval')}>
          Proceed
        </KButton>
      </KBox>
    </ScreenLayout>
  )
}
