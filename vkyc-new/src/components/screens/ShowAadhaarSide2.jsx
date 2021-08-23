import React, { useState, Component, Context, useEffect } from 'react'
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

import { ScreensStateMachineContext } from '../../state/ScreensStateProvider'
import ClickAadhaar from '../webcam/ClickAadhaar'
import { createContext } from 'react'
import { useContext } from 'react'
import { Typography } from '@material-ui/core'
function Aadhaar() {
  const [imageURL, setimageURL] = useState('')
  const [clarity, setClarity] = useState('')
  const { screensServices } = useContext(ScreensStateMachineContext)
  var videoEle = React.createRef()
  var canvasEle = React.createRef()
  var imageEle = React.createRef()

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
      })

      videoEle.current.srcObject = stream
    } catch (err) {
      console.log(err)
    }
  }
  const takeSelfie = async () => {
    backToCam()
    // Get the exact size of the video element.
    const width = videoEle.current.videoWidth
    const height = videoEle.current.videoHeight

    // get the context object of hidden canvas
    const ctx = canvasEle.current.getContext('2d')

    // Set the canvas to the same dimensions as the video.
    canvasEle.current.width = width
    canvasEle.current.height = height

    // Draw the current frame from the video on the canvas.
    ctx.drawImage(videoEle.current, 0, 0, width, height)

    // Get an image dataURL from the canvas.
    const imageDataURL = canvasEle.current.toDataURL('image/png')

    setimageURL(imageDataURL)
    setClarity('fine') //get the clarity from backend
  }

  const backToCam = () => {
    setimageURL('')
    startCamera()
  }
  const nextpage = () => {
    screensServices.send('user-info')
  }
  useEffect(() => {
    startCamera()
  })
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
          {startCamera() && (
            <div className="cam">
              <video
                width="100%"
                height="100%"
                className="video-player"
                autoPlay={true}
                ref={videoEle}
              ></video>

              <KButton onClick={() => takeSelfie()}>Take</KButton>
            </div>
          )}
        </VideoScreenLayoutColumnLeft>
        <VideoScreenLayoutColumnMid></VideoScreenLayoutColumnMid>
        <VideoScreenLayoutColumnRight>
          <canvas ref={canvasEle} style={{ display: 'none' }}></canvas>
          {imageURL === '' && (
            <div className="preview">
              <img
                className="preview-img"
                src={require('../images/backside_aadhaar.jpg').default}
                ref={imageEle}
                alt=""
                height="100%"
                width="100%"
              />
              <KTypography>Please show the back side of Aadhaar</KTypography>
            </div>
          )}
          {clarity === 'blur' && (
            <div>
              <img
                src={imageURL}
                ref={imageEle}
                alt=""
                height="100%"
                width="100%"
              />
              <KTypography>image was blur please take it again</KTypography>
            </div>
          )}
          {clarity === 'fine' && <div> () = >{nextpage()}</div>}
        </VideoScreenLayoutColumnRight>
      </VideoScreenLayout>
    </ScreenLayout>
  )
}

export default Aadhaar
