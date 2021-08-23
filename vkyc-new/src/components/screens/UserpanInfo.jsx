import { Typography, Box, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import ScreenLayout from '../layout/ScreenLayout'
import { KTypography, KGrid, KButton, KBox } from '../kiritra'
import FormActions from '../layout/FormActions'

import { useContext } from 'react'
import { ScreensStateMachineContext } from '../../state/ScreensStateProvider'
function App() {
  const { screensServices } = useContext(ScreensStateMachineContext)
  const userdata = [
    {
      id: 1,
      name: 'Abhishek Kumar',
      address: {
        city: 'bangalore',
        zipcode: '560018',
      },
      dob: '14 - 02 - 1999',
      pan_no: 'AB2H32KK39',
      aadhaar_no: '444455556666',
    },
  ]
  return (
    <ScreenLayout>
      <Box>
        <Typography variant="h5" align="center">
          VIDEO ONBOARDING VERIFICATION
        </Typography>
      </Box>
      <KGrid container>
        <KGrid item xs={6}>
          <KBox paddingY={6}>
            <div>
              <div align="center">
                <img
                  src={require('../images/success-icon.png').default}
                  height={50}
                  width={50}
                  alt=""
                />
              </div>
              <img
                src={require('../images/pan_front.png').default}
                height={300}
                width={400}
                alt=""
              />
            </div>
          </KBox>
        </KGrid>

        <KGrid item xs={6}>
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
                        ></TextField>
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
                      <KBox paddingY={2}>
                        <TextField
                          id="outlined-helperText"
                          label="PAN"
                          defaultValue={data.pan_no}
                          helperText=""
                          variant="outlined"
                        />
                        <KBox padding={1} align="center">
                          <div>
                            <img
                              src={require('../images/pan_front.png').default}
                              height={150}
                              width={150}
                              alt=""
                            />
                          </div>
                        </KBox>
                      </KBox>
                    </div>
                  )
                })}
              </div>
            </KBox>
            <KTypography variant="h6" text-align="left">
              Please validate the data
            </KTypography>
            <KBox display="flex" justifyContent="center">
              <KButton onClick={() => screensServices.send('')}>YES</KButton>
            </KBox>
          </FormActions>
        </KGrid>
      </KGrid>
    </ScreenLayout>
  )
}
export default App
