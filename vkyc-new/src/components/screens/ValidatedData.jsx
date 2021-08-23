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

const TextTypography = withStyles({
  root: {
    color: '#32CD32',
  },
})(KTypography)

function App() {
  const [imageURL, setimageURL] = useState('')
  const [clarity, setClarity] = useState('')
  const { screensServices } = useContext(ScreensStateMachineContext)
  var videoEle = React.createRef()
  var canvasEle = React.createRef()
  var imageEle = React.createRef()

  const userdata = [
    {
      id: 1,
      name: 'Abhishek Kumar',
      address: {
        city: 'bangalore',
        street: 'Kulas Light',
        zipcode: '560018',
      },
      dob: '14 - 02 - 1999',
      pan_no: 'AB2H32KK39',
      aadhaar_no: '444455556666',
    },
  ]

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
          <div>
            <img
              className="preview-img"
              src={require('../images/poster.jpg').default}
              ref={imageEle}
              alt=""
              height="100%"
              width="100%"
            />
            <img
              className="preview-img"
              src={require('../images/backside_aadhaar.jpg').default}
              ref={imageEle}
              alt=""
              height="100%"
              width="100%"
            />
          </div>
        </VideoScreenLayoutColumnLeft>
        <VideoScreenLayoutColumnMid></VideoScreenLayoutColumnMid>
        <VideoScreenLayoutColumnRight>
          <FormActions>
            <KBox border={3} paddingX={1}>
              <div>
                {userdata.map((data) => {
                  return (
                    <div>
                      <TextTypography align="left">
                        <p>NAME: {data.name}</p>
                      </TextTypography>

                      <TextTypography align="left">
                        <p>Date of Birth: {data.dob}</p>
                      </TextTypography>

                      <TextTypography align="left">
                        <p>AADHAAR: {data.aadhaar_no}</p>
                      </TextTypography>

                      <TextTypography align="left">
                        <p>
                          ADDRESS: {data.address.city},{data.address.zipcode},
                          {data.address.street}
                        </p>
                      </TextTypography>
                      <br />
                    </div>
                  )
                })}
              </div>
            </KBox>

            <KBox display="flex" justifyContent="center">
              <KButton onClick={() => screensServices.send('question-ask')}>
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
