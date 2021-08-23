import React from 'react'
import { KTypography } from '../kiritra'
import FormInstructions from '../layout/FormInstructions'
import ScreenLayout from '../layout/ScreenLayout'

export default function VideoScheduleDetails() {
  return (
    <ScreenLayout>
      <FormInstructions>
        <KTypography variant="h6">
          Your video onboarding has been scheduled for DD-MM-YYYY at HH:MM, and
          SMS has been sent to your phone with the link to begin the onboarding.
          The details have also been sent your email id.
        </KTypography>
      </FormInstructions>
    </ScreenLayout>
  )
}
