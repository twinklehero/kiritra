import React, { useState } from 'react'
import { useContext } from 'react'
import { makeStyles } from '@material-ui/styles'
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
const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
  },
})
export default function PersonalDetails() {
  const { screensServices } = useContext(ScreensStateMachineContext)
  const classes = useStyles()
  return (
    <ScreenLayout>
      <FormInstructions padding={false}>
        <KTypography variant="h5" align="center">
          Bank Account Verification
        </KTypography>
      </FormInstructions>
      <KBox border={1} paddingX={1}>
        <FormInstructions>
          <KTypography variant="h6" align="center">
            we will need your bank account details for disbursement as well as
            monthly installment debits
          </KTypography>
        </FormInstructions>

        <ApplicationLayout>
          <ApplicationLayoutLeft>
            <FormControlLabel
              control={<KTextField></KTextField>}
              labelPlacement="start"
              label={'Bank'}
              classes={classes}
            />
          </ApplicationLayoutLeft>
          <ApplicationLayoutRight>
            <FormControlLabel
              control={<KTextField></KTextField>}
              labelPlacement="start"
              label={'IFSC Code'}
              classes={classes}
            />
          </ApplicationLayoutRight>
        </ApplicationLayout>
        <ApplicationLayout>
          <ApplicationLayoutLeft>
            <FormControlLabel
              control={<KTextField></KTextField>}
              labelPlacement="start"
              label={'Account Type'}
              classes={classes}
            />
          </ApplicationLayoutLeft>
          <ApplicationLayoutRight>
            <FormControlLabel
              control={<KTextField></KTextField>}
              labelPlacement="start"
              label={'Account Number'}
              classes={classes}
            />
          </ApplicationLayoutRight>
        </ApplicationLayout>
        <ApplicationLayout>
          <ApplicationLayoutLeft>
            <KBox align="left">
              <FormControlLabel
                control={
                  <KButton variant="contained" component="label">
                    Upload File
                    <input type="file" hidden />
                  </KButton>
                }
                labelPlacement="start"
                label={'Cancelled Cheque'}
              />
            </KBox>
          </ApplicationLayoutLeft>
        </ApplicationLayout>
      </KBox>
      <ApplicationLayout>
        <ApplicationLayoutLeft>
          <KBox>
            <KCaption text="*Details will be prefilled from the cheque."></KCaption>
          </KBox>
        </ApplicationLayoutLeft>
        <ApplicationLayoutRight>
          <KBox align="right" paddingY={2}>
            <KButton onClick={() => screensServices.send('account-verified')}>
              Verify Account Details
            </KButton>
          </KBox>
        </ApplicationLayoutRight>
      </ApplicationLayout>
    </ScreenLayout>
  )
}
