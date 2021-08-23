import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { ScreensStateMachineContext } from '../../state/ScreensStateProvider'
import { KButton, KRadioGroup, KTypography } from '../kiritra'
import FormActions from '../layout/FormActions'
import FormInputs from '../layout/FormInputs'
import FormInstructions from '../layout/FormInstructions'
import ScreenLayout from '../layout/ScreenLayout'

export default function VideoAssistanceConfirmation() {
  const [value, setValue] = useState('1')
  const { screensServices } = useContext(ScreensStateMachineContext)

  const handleClick = () => {
    if (value === '1') {
      screensServices.send('onboarding-self')
      console.log('finished')
    } else {
      screensServices.send('onboarding-assistance')
    }
  }

  return (
    <ScreenLayout>
      <FormInstructions>
        <KTypography variant="h4" align="center">
          Video Onboarding
        </KTypography>
      </FormInstructions>
      <FormInputs>
        <KRadioGroup
          value={value}
          onChange={(e) => setValue(e.target.value)}
          options={[
            {
              label: 'I do not need assistance',
              value: '1',
            },
            {
              label: 'I will need a bank official to guide me',
              value: '2',
            },
          ]}
        />
      </FormInputs>
      <FormActions>
        <KButton onClick={() => handleClick()}>Proceed</KButton>
      </FormActions>
    </ScreenLayout>
  )
}
