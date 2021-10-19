import React from 'react'
import { useSelector } from 'react-redux'
import FakeBtn from './FakeBtn/FakeBtn.jsx'
import PlayPauseBtn from './PlayPauseBtn/PlayPauseBtn.jsx'
import ResetBtn from './ResetBtn/ResetBtn.jsx'
import StepForwardBtn from './StepForwardBtn/StepForwardBtn.jsx'
import s from './style.module.scss'

const Controls = () => {
  const isPlaying = useSelector((state) => state.Game.isPlaying)
  return (
    <div className={s.Controls}>
      {isPlaying ? <FakeBtn /> : <ResetBtn />}
      <PlayPauseBtn />
      <StepForwardBtn />
    </div>
  )
}

export default Controls
