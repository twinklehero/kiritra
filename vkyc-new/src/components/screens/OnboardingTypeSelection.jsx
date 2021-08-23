import React, { useContext, useState } from 'react'
import { ScreensStateMachineContext } from '../../state/ScreensStateProvider'
import { KButton, KCaption, KRadioGroup, KTypography } from '../kiritra'
import FormActions from '../layout/FormActions'
import FormInputs from '../layout/FormInputs'
import FormInstructions from '../layout/FormInstructions'
import ScreenLayout from '../layout/ScreenLayout'

export default function OnboardingTypeSelection() {
  const { screensServices } = useContext(ScreensStateMachineContext)
  const [value, setValue] = useState('1')

  const handleClick = () => {
    if (value === '1') {
      screensServices.send('onboarding-video')
    } else {
      screensServices.send('onboarding-inperson')
    }
  }

  return (
    <ScreenLayout>
      <FormInstructions>
        <KTypography variant="h6">
          We will begin your onboarding. This will be video based. Please
          provide your consent to proceed.
        </KTypography>
      </FormInstructions>
      <FormInputs>
        <KRadioGroup
          value={value}
          onChange={(e) => setValue(e.target.value)}
          options={[
            {
              label:
                'I am aware of video based onboarding and would like to proceed with it.',
              value: '1',
            },
            {
              label:
                'I am not comfortable with video based onboarding and would like to proceed with an in person onboarding',
              value: '2',
            },
          ]}
        />
      </FormInputs>
      <FormActions>
        <KButton onClick={() => handleClick()}>Proceed</KButton>
        <KCaption>
          By choosing to proceed with the video based onboarding you agree to
          the rules for the same. You can access the rules{' '}
          <a href="https://google.com">here</a>
        </KCaption>
      </FormActions>
    </ScreenLayout>
  )
}
