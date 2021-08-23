import React from 'react'
import { KTypography } from '../kiritra'
import FormInstructions from '../layout/FormInstructions'
import ScreenLayout from '../layout/ScreenLayout'

export default function VideoAssistanceWaiting() {
  return (
    <ScreenLayout>
      <FormInstructions>
        <KTypography variant="h4" align="center">
          Video Onboarding
        </KTypography>
        <KTypography variant="h6" align="center">
          Please wait while we initiate the video call with our representative
        </KTypography>
        <KTypography variant="h6" align="center">
          Estimated wait time is 15 seconds
        </KTypography>
      </FormInstructions>
    </ScreenLayout>
  )
}
