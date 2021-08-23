import React, { useContext } from 'react'
import { useState } from 'react'
import { ScreensStateMachineContext } from '../../state/ScreensStateProvider'
import { KButton, KDateTimePicker, KTypography } from '../kiritra'
import FormActions from '../layout/FormActions'
import FormInputs from '../layout/FormInputs'
import FormInstructions from '../layout/FormInstructions'
import ScreenLayout from '../layout/ScreenLayout'

export default function VideoConfirmation() {
  const { screensServices } = useContext(ScreensStateMachineContext)
  const [dateTime, setDateTime] = useState(new Date())

  return (
    <ScreenLayout>
      <FormInstructions>
        <KTypography variant="h6">
          We will start the video session now. Please keep the following
          documents handy:
          <ul>
            <li>ID Proof (AADHAAR)</li>
            <li>PAN Card (AADHAAR)</li>
            <li>Proof of Address (AADHAAR/Driving License)</li>
          </ul>
          Alternatively you can schedule a session at a later point in time,
          with the documents.
        </KTypography>
      </FormInstructions>
      <FormInputs>
        <KDateTimePicker
          value={dateTime}
          onChange={(newDateTime) => setDateTime(newDateTime)}
        />
      </FormInputs>
      <FormActions>
        <KButton
          variant="outlined"
          onClick={() => screensServices.send('onboarding-schedule')}
        >
          Schedule
        </KButton>
        <KButton onClick={() => screensServices.send('onboarding-video')}>
          Start Now
        </KButton>
      </FormActions>
    </ScreenLayout>
  )
}
