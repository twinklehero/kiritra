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
            Congratulations! Your loan is now approved and under process. The
            loan amount of{' '}
            <as requested>
              {' '}
              will be disbursed into your account within 24 hours{' '}
            </as>
          </KTypography>
        </FormInstructions>
      </KBox>
      <KBox align="center" border={1}>
        <FormInstructions>
          <KTypography variant="h6" align="center">
            Note that the installments are due on 4th of each month .Please
            ensure that sufficient balance is available in your account .You can
            check fees and charges <a href=" ">here</a>.
          </KTypography>
        </FormInstructions>
      </KBox>

      <KBox align="center">
        <KButton onClick={() => screensServices.send('loan-help')}>
          Proceed
        </KButton>
      </KBox>
    </ScreenLayout>
  )
}
