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
          Loan Approval
        </KTypography>
      </FormInstructions>
      <KBox border={1}>
        <FormInstructions>
          <KTypography variant="h6" align="center">
            Based on your income and credit Score you are approved for a loan of
            Rs 2,00,000.00 for a tenure of 6 months @ 11% p.a
          </KTypography>
        </FormInstructions>

        <ApplicationLayout>
          <ApplicationLayoutLeft>
            <FormControlLabel
              control={<KTextField></KTextField>}
              labelPlacement="start"
              label={'Loan Requested'}
            />
          </ApplicationLayoutLeft>
          <ApplicationLayoutRight>
            <FormControlLabel
              control={<KTextField></KTextField>}
              labelPlacement="start"
              label={'EMI'}
            />
          </ApplicationLayoutRight>
        </ApplicationLayout>
      </KBox>

      <ApplicationLayout>
        <ApplicationLayoutLeft>
          <KBox align="right">
            <FormControlLabel
              control={
                <KButton
                  onClick={() => screensServices.send('account-verification')}
                >
                  Accept
                </KButton>
              }
            />
          </KBox>
        </ApplicationLayoutLeft>
        <ApplicationLayoutRight>
          <KBox align="left">
            <FormControlLabel control={<KButton>Reject</KButton>} />
          </KBox>
        </ApplicationLayoutRight>
      </ApplicationLayout>
    </ScreenLayout>
  )
}
