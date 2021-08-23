import React, { useState } from 'react'
import ScreenLayout from '../layout/ScreenLayout'
import {
  VideoScreenLayout,
  VideoScreenLayoutColumnLeft,
  VideoScreenLayoutColumnRight,
  VideoScreenLayoutColumnMid,
} from '../layout/VideoScreenLayout'
import { KTypography, KBox } from '../kiritra'
import FormInstructions from '../layout/FormInstructions'
import KButton from '../kiritra/KButton'
import { useContext } from 'react'
import { ScreensStateMachineContext } from '../../state/ScreensStateProvider'
import ClickAadhaar from '../webcam/ClickAadhaar'
function App() {
  const [playing, setPlaying] = useState(false)
  const { screensServices } = useContext(ScreensStateMachineContext)
  const HEIGHT = 325
  const WIDTH = 404

  const startVideo = () => {
    setPlaying(true)
    navigator.getUserMedia(
      {
        video: true,
      },
      (stream) => {
        let video = document.getElementsByClassName('app__videoFeed')[0]
        if (video) {
          video.srcObject = stream
        }
      },
      (err) => console.error(err)
    )
  }

  return (
    <ScreenLayout>
      <FormInstructions padding={false}>
        <KTypography variant="h5" align="center">
          VIDEO ONBOARDING
        </KTypography>
        <KTypography variant="h5" align="center">
          AADHAAR VERIFICATION
        </KTypography>
      </FormInstructions>
      <VideoScreenLayout>
        <VideoScreenLayoutColumnLeft>
          <ClickAadhaar />
        </VideoScreenLayoutColumnLeft>
        <VideoScreenLayoutColumnMid></VideoScreenLayoutColumnMid>

        <VideoScreenLayoutColumnRight>
          <div>
            <img
              src={require('../images/backside_aadhaar.jpg').default}
              height="200"
              width="300"
              alt=""
            />
          </div>

          <KTypography>Please show the first side of Aadhaar</KTypography>
          <KTypography></KTypography>
          <KBox display="flex" justifyContent="center">
            <KButton onClick={() => screensServices.send('aadhaar-info')}>
              Proceed
            </KButton>
          </KBox>
        </VideoScreenLayoutColumnRight>
      </VideoScreenLayout>
    </ScreenLayout>
  )
}
export default App
