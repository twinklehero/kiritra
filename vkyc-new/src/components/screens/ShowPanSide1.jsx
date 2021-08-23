import React, { useState } from 'react'
import ScreenLayout from '../layout/ScreenLayout'
import { KTypography, KBox, KGrid } from '../kiritra'
import FormActions from '../layout/FormActions'
import KButton from '../kiritra/KButton'
import { useContext } from 'react'
import { ScreensStateMachineContext } from '../../state/ScreensStateProvider'
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

  const stopVideo = () => {
    setPlaying(false)
    let video = document.getElementsByClassName('app__videoFeed')[0]
    video.srcObject.getTracks()[0].stop()
  }

  return (
    <ScreenLayout>
      <KBox>
        <KTypography variant="h5" align="center">
          VIDEO ONBOARDING PAN VERIFICATION
        </KTypography>
      </KBox>
      <KGrid container>
        <KGrid item xs={6}>
          <FormActions>
            <KBox border={1}>
              <div className="app">
                <div className="app__container">
                  <video
                    poster="../images/poster.gif"
                    height={HEIGHT}
                    width={WIDTH}
                    autoPlay
                    className="app__videoFeed"
                  ></video>

                  <div className="app__input">
                    {playing ? (
                      <div></div>
                    ) : (
                      <KBox display="flex" justifyContent="center">
                        <KButton onClick={startVideo}>Start</KButton>
                      </KBox>
                    )}
                  </div>
                </div>
              </div>
            </KBox>
          </FormActions>
        </KGrid>
        <KGrid item xs={1} container></KGrid>

        <KGrid item xs={5} container spacing={1}>
          <FormActions>
            <KBox>
              <div>
                <img
                  src={require('../images/pan_front.png').default}
                  height={200}
                  width={350}
                  alt=""
                />
              </div>

              <KTypography>Please show the front side of pan</KTypography>
            </KBox>

            <KTypography></KTypography>
            <KBox display="flex" justifyContent="center">
              <KButton onClick={() => screensServices.send('pan-info')}>
                Proceed
              </KButton>
            </KBox>
          </FormActions>
        </KGrid>
      </KGrid>
    </ScreenLayout>
  )
}
export default App
