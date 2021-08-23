import React, { useState } from 'react'
import ScreenLayout from '../layout/ScreenLayout'

import { KTypography, KBox } from '../kiritra'
import FormInstructions from '../layout/FormInstructions'
import KButton from '../kiritra/KButton'
import { useContext } from 'react'
import webcam from '../screens/WebCam'
import { ScreensStateMachineContext } from '../../state/ScreensStateProvider'

function App() {
  const { screensServices } = useContext(ScreensStateMachineContext)
  const [playing, setPlaying] = useState(false)

  return (
    <ScreenLayout>
      <webcam />
      <FormInstructions padding={false}>
        <KTypography variant="h6" align="center">
          You have been successfully onboarded .Now we will proceed with the
          loan Application.
        </KTypography>
        <KBox align="center">
          <KButton onClick={() => screensServices.send('income-verification')}>
            Proceed
          </KButton>
        </KBox>
      </FormInstructions>
    </ScreenLayout>
  )
}
export default App
