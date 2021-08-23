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
import { Fab } from '@material-ui/core'
import { OutlinedInput } from '@material-ui/core'
import { RadioGroup, FormControlLabel, Radio } from '@material-ui/core'
import FormActions from '../layout/FormActions'
import FormInputs from '../layout/FormInputs'
import FormInstructions from '../layout/FormInstructions'
import ScreenLayout from '../layout/ScreenLayout'
import { makeStyles } from '@material-ui/core/styles'
import {
  ApplicationScreenLayout,
  ApplicationScreenLayoutColumnLeft,
  ApplicationScreenLayoutColumnRight,
  ApplicationScreenLayoutColumnLeftthirdstart,
  ApplicationScreenLayoutColumnLeftthirdmid,
  ApplicationScreenLayoutColumnLeftthirdlast,
} from '../layout/ApplicationScreenLayout'
import AddIcon from '@material-ui/icons/Add'
import NavigationIcon from '@material-ui/icons/Navigation'
const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  extendedIcon: {},
})
export default function PersonalDetails() {
  const [value, setValue] = useState('')
  const { screensServices } = useContext(ScreensStateMachineContext)
  const classes = useStyles()
  return (
    <ScreenLayout>
      <FormInstructions padding={false}>
        <KTypography variant="h5" align="center">
          Income Verification
        </KTypography>
      </FormInstructions>
      <ApplicationScreenLayout>
        <ApplicationScreenLayoutColumnLeft>
          <FormInputs>
            <KBox align="left">
              <FormControlLabel
                control={
                  <KTextField
                    autoComplete="family-name"
                    required
                    variant="outlined"
                  />
                }
                labelPlacement="start"
                label={'Annual Income ()'}
                classes={classes}
              />
              <FormControlLabel
                styles={{ display: 'flex' }}
                control={
                  <KTextField
                    autoComplete="family-name"
                    required
                    variant="outlined"
                  />
                }
                labelPlacement="start"
                label={'Attach last 3 months payslip '}
                classes={classes}
              />
            </KBox>
          </FormInputs>
        </ApplicationScreenLayoutColumnLeft>
      </ApplicationScreenLayout>

      <ApplicationScreenLayout>
        <ApplicationScreenLayoutColumnLeftthirdstart></ApplicationScreenLayoutColumnLeftthirdstart>
        <ApplicationScreenLayoutColumnLeftthirdmid>
          <KBox align="center">
            <FormControlLabel
              control={
                <KButton variant="contained" component="label">
                  Launch Tax Portal**
                </KButton>
              }
              labelPlacement="start"
              label={'ITR for last three years'}
            />
          </KBox>
        </ApplicationScreenLayoutColumnLeftthirdmid>
        <ApplicationScreenLayoutColumnLeftthirdlast>
          {' '}
          <FormControlLabel
            control={
              <KButton variant="contained" component="label">
                Upload File
                <input type="file" hidden />
              </KButton>
            }
            classes={classes}
          />
        </ApplicationScreenLayoutColumnLeftthirdlast>
      </ApplicationScreenLayout>

      <KBox display="flex" justifyContent="center">
        <KCaption text="*Self Attested.">
          <br></br>
        </KCaption>

        <KCaption text="*We launch Tax portal to capture your ITR.No other data will be saved ."></KCaption>
      </KBox>
      <KBox align="center">
        <KButton onClick={() => screensServices.send('credit-score')}>
          Proceed
        </KButton>
      </KBox>
    </ScreenLayout>
  )
}
