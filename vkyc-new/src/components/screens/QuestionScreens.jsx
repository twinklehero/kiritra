import React, { useState, useEffect } from 'react'
import ScreenLayout from '../layout/ScreenLayout'
import {
  VideoScreenLayout,
  VideoScreenLayoutColumnLeft,
  VideoScreenLayoutColumnRight,
  VideoScreenLayoutColumnMid,
} from '../layout/VideoScreenLayout'
import { KTypography, KBox, KTextField } from '../kiritra'
import FormInstructions from '../layout/FormInstructions'
import KButton from '../kiritra/KButton'
import { useContext } from 'react'

import { ScreensStateMachineContext } from '../../state/ScreensStateProvider'
function App() {
  const [imageURL, setimageURL] = useState('')
  const [clarity, setClarity] = useState('')
  const { screensServices } = useContext(ScreensStateMachineContext)
  var videoEle = React.createRef()
  var canvasEle = React.createRef()
  var imageEle = React.createRef()
  useEffect(() => {
    startCamera()
  })

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
      })
      videoEle.current.srcObject = stream
    } catch (err) {
      console.log('error in accessing camera ', err)
    }
  }

  return (
    <ScreenLayout>
      <FormInstructions padding={false}>
        <KTypography variant="h5" align="center">
          VIDEO ONBOARDING
        </KTypography>
        <KTypography variant="h5" align="center">
          LIFE VERIFICATION
        </KTypography>
      </FormInstructions>
      <VideoScreenLayout>
        <VideoScreenLayoutColumnLeft>
          <KBox height="80%">
            {startCamera() && (
              <div>
                <video
                  width="100%"
                  height="100%"
                  autoPlay={true}
                  ref={videoEle}
                ></video>
              </div>
            )}
          </KBox>
        </VideoScreenLayoutColumnLeft>
        <VideoScreenLayoutColumnMid></VideoScreenLayoutColumnMid>
        <VideoScreenLayoutColumnRight>
          <KBox paddingY={8}>
            <KTypography variant="h6" text-align="center">
              Random number of questions will be asked .Please speak out your
              responses Loudly and Clearly .
            </KTypography>
          </KBox>
          <KBox display="flex" justifyContent="center">
            <KButton onClick={() => screensServices.send('questions-ans')}>
              Proceed
            </KButton>
          </KBox>
        </VideoScreenLayoutColumnRight>
      </VideoScreenLayout>
    </ScreenLayout>
  )
}
export default App
