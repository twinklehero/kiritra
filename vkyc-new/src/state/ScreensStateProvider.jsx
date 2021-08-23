import { useActor, useInterpret } from '@xstate/react'
import { useState } from 'react'
import { createContext, useEffect } from 'react'
import { Prompt, useHistory } from 'react-router-dom'
import { createMachine } from 'xstate'
import { Screens } from '../components/screens/ScreenConfig'
import { screensStateMachineConfig } from '../config/screensStateMachineConfig'

const screensMachine = createMachine(screensStateMachineConfig)

export const ScreensStateMachineContext = createContext({})

export function ScreensStateMachineProvider({ children }) {
  const screensServices = useInterpret(screensMachine)
  const [state] = useActor(screensServices)
  const history = useHistory()
  const [isBlocking, setIsBlocking] = useState(false)

  useEffect(() => {
    // if (state.value === 'personalDetails' || state.value === 'enterOtp') {
    //   history.push('/' + Screens[state.value].url)
    // } else {
    //   history.replace('/' + Screens[state.value].url)
    // }
    history.replace('/' + Screens[state.value].url)
    //Using history.replace so that the user can not press back to access older screens
  }, [state, history])

  // useEffect(() => {
  //   history.listen((location, action) => {
  //     if (action === 'POP') {
  //       setIsBlocking(true)
  //       history.replace('/' + Screens[state.value].url)
  //     }
  //   })
  // }, [])

  return (
    <ScreensStateMachineContext.Provider
      value={{
        screensServices,
      }}
    >
      {/* <Prompt
        message={(location, action) => {
          if(action === 'POP') {
            return 'Leaving this page will reset'
          }
        }}
      /> */}
      {children}
    </ScreensStateMachineContext.Provider>
  )
}
