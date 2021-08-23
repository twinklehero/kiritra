import React, { useState } from 'react'
import { useContext } from 'react'
import { ScreensStateMachineContext } from '../../state/ScreensStateProvider'
import { KButton, KTextField, KTypography, KWarning } from '../kiritra'
import FormActions from '../layout/FormActions'
import FormInputs from '../layout/FormInputs'
import FormInstructions from '../layout/FormInstructions'
import ScreenLayout from '../layout/ScreenLayout'

export default function EnterOtp() {
  const { screensServices } = useContext(ScreensStateMachineContext)
  const [otp, setOtp] = useState('')
  const [error, setError] = useState(null)

  const handleOTPSubmit = () => {
    // if (otp !== '123456') {
    //   setError('Invalid, enter correct OTP')
    //   setOtp('')
    // } else {
    //   setError(null)
    //   screensServices.send('onboarding')
    // }

    screensServices.send('onboarding')
  }

  return (
    <ScreenLayout>
      <FormInstructions>
        <KTypography variant="h6">
          Thank you for choosing us to open and loan account. This should not
          take more than 10 minutes of your time. Please provide some details
          before we proceed.
        </KTypography>
      </FormInstructions>
      <FormInputs>
        <KTextField
          label="Enter OTP"
          required
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />
      </FormInputs>
      <FormActions>
        <KButton onClick={handleOTPSubmit}>Proceed</KButton>
        {error && <KWarning text={error} />}
      </FormActions>
    </ScreenLayout>
  )
}
