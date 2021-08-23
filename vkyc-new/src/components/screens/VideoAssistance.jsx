import { useContext } from 'react'
import { ScreensStateMachineContext } from '../../state/ScreensStateProvider'
import { KBox, KButton, KTypography } from '../kiritra'

import FormActions from '../layout/FormActions'
import ScreenLayout from '../layout/ScreenLayout'
import vid from '../images/onboard.mp4'
import React from 'react'
import Typography from '@material-ui/core/Typography'

import { withStyles } from '@material-ui/core/styles'

const TextTypography = withStyles({
  root: {
    color: '#00FF00',
  },
})(Typography)

export default function PersonalDetails() {
  const { screensServices } = useContext(ScreensStateMachineContext)
  return (
    <ScreenLayout>
      <KBox display="flex" justifyContent="center" flexWrap="wrap">
        <KTypography variant="h5" align="center">
          VIDEO ONBOARDING
        </KTypography>
      </KBox>
      <KBox align="center" border={0}>
        <div>
          <video
            src={vid}
            controls
            height="82%"
            width="82%"
            disablePictureinPicture="true"
            controlsList="nodownload"
          />
        </div>
      </KBox>

      <FormActions>
        <KTypography variant="h6" text-align="center">
          For your reference here is a sample videos
        </KTypography>
        <KBox display="flex" justifyContent="center">
          <KButton onClick={() => screensServices.send('onboarding-video')}>
            START
          </KButton>
        </KBox>
      </FormActions>
    </ScreenLayout>
  )
}
