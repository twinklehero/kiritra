import React, { useState, useEffect } from 'react'
import ScreenLayout from '../layout/ScreenLayout'
import {
  VideoScreenLayout,
  VideoScreenLayoutColumnLeft,
  VideoScreenLayoutColumnRight,
  VideoScreenLayoutColumnMid,
} from '../layout/VideoScreenLayout'
import { KTypography, KBox, KTextField } from '../kiritra'
import FormInstructions from '../layout/FormInstructions'
import KButton from '../kiritra/KButton'
import { useContext } from 'react'
import MicRecorder from 'mic-recorder-to-mp3'

import Questions from '../../config/QuestionConfig.json'

import { ScreensStateMachineContext } from '../../state/ScreensStateProvider'
function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const { screensServices } = useContext(ScreensStateMachineContext)
  const [playing, setPlaying] = useState(false)

  const Mp3Recorder = new MicRecorder({ bitRate: 128 })
  const [isRecording, setRecording] = useState(false)
  const [blobURL, setblobURL] = useState('')
  const [isBlocked, setBlocked] = useState(false)

  const [imageURL, setimageURL] = useState('')
  const [clarity, setClarity] = useState('')

  var videoEle = React.createRef()
  var canvasEle = React.createRef()
  var imageEle = React.createRef()
  useEffect(() => {
    startCamera()
  })

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
  const start = () => {
    if ({ isBlocked }) {
      console.log('Permission Denied')
    } else {
      Mp3Recorder.start()
        .then(() => {
          this.setState({ isRecording: true })
        })
        .catch((e) => console.error(e))
    }
  }
  const stop = () => {
    Mp3Recorder.stop()
  }
  const questions = [
    {
      questionText: 'What is the pincode in the address of your AADHAAR Card?',
    },
    {
      questionText: 'What is the birth date on your PAN Card?',
    },
    {
      questionText: '',
    },
  ]
  const handleAnswerOptionClick = () => {
    const nextQuestion = currentQuestion + 1
    if (nextQuestion < 2) setCurrentQuestion(nextQuestion)
    else screensServices.send('successfully-onboarded')
  }
  const button = document.querySelector('button')
  const recorder = new MicRecorder({
    bitRate: 128,
  })

  function startRecording() {
    recorder
      .start()
      .then(() => {
        button.textContent = 'Stop recording'
        button.classList.toggle('btn-danger')
        button.removeEventListener('click', startRecording)
        button.addEventListener('click', stopRecording)
      })
      .catch((e) => {
        console.error(e)
      })
  }

  function stopRecording() {
    recorder
      .stop()
      .getMp3()
      .then(([buffer, blob]) => {
        console.log(buffer, blob)
        const file = new File(buffer, 'music.mp3', {
          type: blob.type,
          lastModified: Date.now(),
        })
        var d = document.querySelector('.p')
        d.textContent += URL.createObjectURL(file)
        console.log('url of the file is ', d.textContent)
        const li = document.createElement('li')
        console.log(file)
        const player = new Audio(URL.createObjectURL(file))
        player.controls = true
        li.appendChild(player)
        document.querySelector('#playlist').appendChild(li)

        button.textContent = 'Start recording'
        button.classList.toggle('btn-danger')
        button.removeEventListener('click', stopRecording)
        button.addEventListener('click', startRecording)
      })
      .catch((e) => {
        console.error(e)
      })
  }

  return (
    <ScreenLayout>
      <FormInstructions padding={false}>
        <KTypography variant="h5" align="center">
          VIDEO ONBOARDING
        </KTypography>
        <KTypography variant="h5" align="center">
          LIFE VERIFICATION
        </KTypography>
      </FormInstructions>
      <VideoScreenLayout>
        <VideoScreenLayoutColumnLeft>
          <KBox height="80%">
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
          <KBox paddingY={8}>
            <KTypography variant="h6" text-align="left">
              {questions[currentQuestion].questionText}
              <KBox display="flex" justifyContent="center" paddingY={3}>
                <KButton onClick={startRecording}>Speak</KButton>
                <KButton onClick={stopRecording}>Stop</KButton>
              </KBox>
              <KBox>
                <KButton onClick={() => handleAnswerOptionClick()}>
                  Next
                </KButton>
              </KBox>
            </KTypography>
          </KBox>
        </VideoScreenLayoutColumnRight>
      </VideoScreenLayout>
    </ScreenLayout>
  )
}
export default App
// {questions[currentQuestion].questionText}
