import { ThemeProvider } from '@material-ui/core'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import { theme } from './utils/theme'
import MainLayout from './components/layout/MainLayout'
import { ScreensStateMachineProvider } from './state/ScreensStateProvider'
import './App.css'
import { Screens } from './components/screens/ScreenConfig'

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <MainLayout>
          <Router>
            <Switch>
              <ScreensStateMachineProvider>
                {Object.keys(Screens).map((key, index) => (
                  <Route path={`/${Screens[key].url}`} key={index} exact>
                    {Screens[key].component}
                  </Route>
                ))}
              </ScreensStateMachineProvider>
            </Switch>
          </Router>
          {/* <RenderScreens /> */}
        </MainLayout>
      </ThemeProvider>
    </div>
  )
}

export default App
