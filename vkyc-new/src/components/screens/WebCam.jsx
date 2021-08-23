import React, { useEffect } from 'react'

import KBox from '../kiritra/KBox'
function App() {
  var videoEle = React.createRef()

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
  return (
    <div>
      <KBox height="100%">
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
    </div>
  )
}
export default App
