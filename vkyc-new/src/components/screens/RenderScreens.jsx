import { useActor } from '@xstate/react'
import React, { useContext, useState } from 'react'
import { useEffect } from 'react'
import {
  Redirect,
  Route,
  Switch,
  useHistory,
  useRouteMatch,
} from 'react-router-dom'
import { ScreensStateMachineContext } from '../../state/ScreensStateProvider'
// import Screen1 from './Screen1'
// import Screen2 from './Screen2'
// import Screen3 from './Screen3'
// import Screen4 from './Screen4'
// import Screen5 from './Screen5'
// import Screen6 from './Screen6'
// import Screen7 from './Screen7'
// import Screen8 from './Screen8'
import { Screens } from './ScreenConfig'

export default function RenderScreens({ match }) {
  const screensStateMachine = useContext(ScreensStateMachineContext)
  const [state] = useActor(screensStateMachine.screensServices)
  let { path, url } = useRouteMatch()
  const history = useHistory()

  useEffect(() => {
    console.log(state.value, path, url)
    history.push(url + '/' + Screens[state.value].url)
  }, [state, history, url])
  // return Screens[state.value].component
  // return <Redirect to={`/onboarding/${Screens[state.value].url}`} />
}
