import React, { useState, Component ,Context } from 'react'
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
class Aadhaar extends Component {
 
  state = {
    imageURL: '',
    clarity: '',
  }
  videoEle = React.createRef()
  canvasEle = React.createRef()
  imageEle = React.createRef()
  componentDidMount = async () => {
    this.startCamera()
  }
  startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
      })

      this.videoEle.current.srcObject = stream
    } catch (err) {
      console.log(err)
    }
  }
  takeSelfie = async () => {
    this.backToCam()
    // Get the exact size of the video element.
    const width = this.videoEle.current.videoWidth
    const height = this.videoEle.current.videoHeight

    // get the context object of hidden canvas
    const ctx = this.canvasEle.current.getContext('2d')

    // Set the canvas to the same dimensions as the video.
    this.canvasEle.current.width = width
    this.canvasEle.current.height = height

    // Draw the current frame from the video on the canvas.
    ctx.drawImage(this.videoEle.current, 0, 0, width, height)

    // Get an image dataURL from the canvas.
    const imageDataURL = this.canvasEle.current.toDataURL('image/png')

    this.setState({
      imageURL: imageDataURL,
      clarity: 'blur', //update clarity from backend
    })
  }

  backToCam = () => {
    this.setState(
      {
        imageURL: '',
      },
      () => {
        this.startCamera()
      }
    )
  }
  render() {
    
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
            {this.state.imageURL === '' && (
              <div className="cam">
                <video
                  width="100%"
                  height="100%"
                  className="video-player"
                  autoPlay={true}
                  ref={this.videoEle}
                ></video>

                <KButton onClick={() => this.takeSelfie()}>Click</KButton>
              </div>
            )}
            {this.state.imageURL !== '' && (
              <div className="cam">
                <video
                  width="100%"
                  height="100%"
                  className="video-player"
                  autoPlay={true}
                  ref={this.videoEle}
                ></video>

                <KButton onClick={() => this.takeSelfie()}>Click</KButton>
              </div>
            )}
          </VideoScreenLayoutColumnLeft>
          <VideoScreenLayoutColumnMid></VideoScreenLayoutColumnMid>
          <VideoScreenLayoutColumnRight>
            <canvas ref={this.canvasEle} style={{ display: 'none' }}></canvas>
            {this.state.imageURL === '' && (
              <div className="preview">
                <img
                  className="preview-img"
                  src={require('../images/poster.jpg').default}
                  ref={this.imageEle}
                  alt=""
                  height="100%"
                  width="100%"
                />
                <KTypography>Please show the first side of Aadhaar</KTypography>
                <KButton onClick={() => this.backToCam()}>back</KButton>
              </div>
            )}
            {this.state.clarity === 'blur' && (
              <div className="preview">
                <img
                  className="preview-img"
                  src={this.state.imageURL}
                  ref={this.imageEle}
                  alt=""
                  height="100%"
                  width="100%"
                />
                <KButton onClick={() => this.backToCam()}>back</KButton>
              </div>
            )}
             {this.state.clarity === 'fine' && (
              {screensServices.send('aadhaar-info')}
            )}
          </VideoScreenLayoutColumnRight>
        </VideoScreenLayout>
      </ScreenLayout>
    )
  }
}
export default Aadhaar
