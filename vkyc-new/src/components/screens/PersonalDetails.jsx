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
import FormActions from '../layout/FormActions'
import FormInputs from '../layout/FormInputs'
import FormInstructions from '../layout/FormInstructions'
import ScreenLayout from '../layout/ScreenLayout'

export default function PersonalDetails() {
  const [value, setValue] = useState('')
  const { screensServices } = useContext(ScreensStateMachineContext)

  return (
    <ScreenLayout>
      <FormInstructions>
        <KTypography variant="h6">
          Thank you for choosing us to open a loan account! This should not take
          more than 10 minutes of your time. Please provide some details before
          we proceed.
        </KTypography>
      </FormInstructions>

      <FormInputs>
        <KSelect
          value={value}
          onChange={(e) => setValue(e.target.value)}
          label="Title"
          options={[
            { value: 'Mr', label: 'Mr' },
            { value: 'Mrs', label: 'Mrs' },
          ]}
        />

        <KTextField
          autoComplete="given-name"
          label="First Name"
          required={true}
        />
        <KTextField
          autoComplete="family-name"
          label="Last Name"
          required
          variant="outlined"
        />
        <KTextField
          autoComplete="tel-local"
          label="Phone Number"
          required
          variant="outlined"
        />
        <KTextField
          autoComplete="email"
          label="Email ID"
          required
          variant="outlined"
          type="email"
        />
      </FormInputs>

      <FormActions>
        <KBox display="flex" justifyContent="center">
          <KButton onClick={() => screensServices.send('onboarding')}>
            Send OTP
          </KButton>
        </KBox>
        <KCaption
          text="*An OTP will be sent to this number/email. Please ensure that you
              have acces to this number/email."
        ></KCaption>
      </FormActions>
    </ScreenLayout>
  )
}
