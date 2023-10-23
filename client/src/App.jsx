import { useState } from 'react'
import './App.css'
import Broadcast from './components/broadcast'
import View from './components/view'
import { useEffect } from 'react'

function App() {
  const [mode, setMode] = useState()

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const appMode = urlParams.get('mode');

    if(appMode == "broadcast") setMode("broadcast")
    if(appMode == "view") setMode("view")
  }, [])

  return (
    <>
        {!mode && <button onClick={() => setMode("broadcast")}>
          Start a broadcast
        </button>}
        {mode == "broadcast" && <Broadcast />}
        {mode == "view" && <View />}
    </>
  )
}

export default App
