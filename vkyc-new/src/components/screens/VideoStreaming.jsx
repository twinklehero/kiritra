import React, { useState } from 'react'
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
  const { screensServices } = useContext(ScreensStateMachineContext)
  const [playing, setPlaying] = useState(false)

  const [inputValues, setInputValues] = useState({})
  const [counter, setCounter] = useState(0)
  const [otp, setOtp] = useState('GET OTP')

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

  const stopVideo = () => {
    setPlaying(false)
    let video = document.getElementsByClassName('app__videoFeed')[0]
    video.srcObject.getTracks()[0].stop()
  }
  const handleClick = () => {
    if (otp === 'GET OTP') setOtp('SUBMIT')
    if (otp === 'SUBMIT') setOtp('Resend OTP')
    if (counter < 1) setCounter(counter + 1)
    console.log(counter)
  }

  const handleOnChange = (e) => {
    const abc = {}
    abc[e.target.className] = e.target.value
    setInputValues({ ...inputValues, ...abc })
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
          <KBox height="80%">
            <video
              autoPlay
              height={HEIGHT}
              width={WIDTH}
              className="app__videoFeed"
            ></video>
          </KBox>

          <div className="app__input">
            {playing ? (
              <div></div>
            ) : (
              <KBox height="20%" display="flex" justifyContent="center">
                <KButton onClick={startVideo}>Start</KButton>
              </KBox>
            )}
          </div>
        </VideoScreenLayoutColumnLeft>
        <VideoScreenLayoutColumnMid></VideoScreenLayoutColumnMid>
        <VideoScreenLayoutColumnRight>
          <div>
            <KTextField
              autoComplete="given-name"
              label="ENTER AADHAAR NUMBER"
              required={true}
            />
          </div>
          <div>
            {Array.from(Array(counter)).map((c, index) => {
              return (
                <KTextField
                  onChange={handleOnChange}
                  key={c}
                  type="text"
                  label="ENTER OTP*"
                ></KTextField>
              )
            })}

            <KButton onClick={handleClick}>*{otp}</KButton>
          </div>
          <KTypography variant="h6" text-align="left">
            Please ensure that your face is clearly visible
          </KTypography>
          <KBox display="flex" justifyContent="center">
            <KButton onClick={() => screensServices.send('aadhaar-front')}>
              Proceed
            </KButton>
          </KBox>
        </VideoScreenLayoutColumnRight>
      </VideoScreenLayout>
    </ScreenLayout>
  )
}
export default App
