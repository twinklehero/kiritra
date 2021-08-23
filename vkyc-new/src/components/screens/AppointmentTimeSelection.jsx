import React, { useState } from 'react'
import { KButton, KTimePicker, KTypography } from '../kiritra'
import FormActions from '../layout/FormActions'
import FormInputs from '../layout/FormInputs'
import FormInstructions from '../layout/FormInstructions'
import ScreenLayout from '../layout/ScreenLayout'

export default function AppointmentTimeSelection() {
  const [preferredTime, setPreferredTime] = useState(new Date())
  return (
    <ScreenLayout>
      <FormInstructions>
        <KTypography variant="h6">
          Our reprentative will call you within 24 hours to schedule an
          appointment with you. Please provide a preferred time slot to reach
          out to you.
        </KTypography>
      </FormInstructions>
      <FormInputs>
        <KTimePicker
          label="Appointment Time"
          value={preferredTime}
          onChange={(newTime) => setPreferredTime(newTime)}
        />
      </FormInputs>
      <FormActions>
        <KButton onClick={() => console.log('finished')}>Submit</KButton>
      </FormActions>
    </ScreenLayout>
  )
}
