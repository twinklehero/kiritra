import React, { useState, useEffect } from 'react'
import ScreenLayout from '../layout/ScreenLayout'
import { KTypography, KBox, KButton, KTextField } from '../kiritra'
import FormActions from '../layout/FormActions'
import FormInstructions from '../layout/FormInstructions'
import green from '@material-ui/core/colors/green'
import { Box } from '@material-ui/core'
import {
  VideoScreenLayout,
  VideoScreenLayoutColumnLeft,
  VideoScreenLayoutColumnRight,
  VideoScreenLayoutColumnMid,
} from '../layout/VideoScreenLayout'
import { useContext } from 'react'
import { ScreensStateMachineContext } from '../../state/ScreensStateProvider'
import { StayPrimaryLandscape } from '@material-ui/icons'
import { withStyles } from '@material-ui/core/styles'

const TextField = withStyles({
  root: {
    color: '#00FF00',
  },
})(KTextField)
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
  const userdata = [
    {
      id: 1,
      name: 'Abhishek Kumar',
      address: {
        city: 'bangalore',
        street: 'Kulas Light',
        suite: 'Apt. 556',
        zipcode: '560018',
      },
      dob: '14 - 02 - 1999',
      pan_no: 'AB2H32KK39',
      aadhaar_no: '444455556666',
    },
  ]
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
          AADHAAR VERIFICATION
        </KTypography>
      </FormInstructions>
      <VideoScreenLayout>
        <VideoScreenLayoutColumnLeft>
          <KBox paddingY={1}>
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
          <FormActions>
            <KBox>
              <div>
                {userdata.map((data) => {
                  return (
                    <div>
                      <KBox paddingY={2}>
                        <TextField
                          id="outlined-helperText"
                          label="NAME"
                          defaultValue={data.name}
                          helperText=""
                          variant="outlined"
                        />
                      </KBox>
                      <KBox paddingY={2}>
                        <TextField
                          id="outlined-helperText"
                          label="Date of Birth"
                          defaultValue={data.dob}
                          helperText=""
                          variant="outlined"
                        />
                      </KBox>
                      -
                      <KBox paddingY={2}>
                        <TextField
                          id="outlined-helperText"
                          label="AADHAAR"
                          defaultValue={data.aadhaar_no}
                          helperText=""
                          variant="outlined"
                        />
                      </KBox>
                      <KBox paddingY={2}>
                        <TextField
                          id="outlined-helperText"
                          label="ADDRESS"
                          defaultValue={data.address.city}
                          helperText=""
                          variant="outlined"
                          color="green"
                        />
                      </KBox>
                    </div>
                  )
                })}
              </div>
            </KBox>

            <KBox display="flex" justifyContent="center">
              <KButton onClick={() => screensServices.send('valid-data')}>
                proceed
              </KButton>
            </KBox>
          </FormActions>
        </VideoScreenLayoutColumnRight>
      </VideoScreenLayout>
    </ScreenLayout>
  )
}
export default App
