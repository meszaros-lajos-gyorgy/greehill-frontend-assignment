import React from 'react'
import { useSelector } from 'react-redux'
import FakeBtn from './FakeBtn/FakeBtn.jsx'
import PlayPauseBtn from './PlayPauseBtn/PlayPauseBtn.jsx'
import ClearBtn from './ClearBtn/ClearBtn.jsx'
import StepForwardBtn from './StepForwardBtn/StepForwardBtn.jsx'
import Spacer from './Spacer/Spacer.jsx'
import RandomizeBtn from './RandomizeBtn/RandomizeBtn.jsx'
import StepBackwardBtn from './StepBackwardBtn/StepBackwardBtn.jsx'
import ResetBtn from './ResetBtn/ResetBtn.jsx'
import s from './style.module.scss'
import Indicators from './Indicators/Indicators.jsx'

const Controls = () => {
  const isPlaying = useSelector((state) => state.Game.isPlaying)
  const generation = useSelector((state) => state.Game.generation)
  const started = useSelector((state) => state.Game.started)

  return (
    <div className={s.Controls}>
      {started ? isPlaying ? <FakeBtn /> : <ResetBtn /> : <ClearBtn />}
      {started ? <FakeBtn /> : <RandomizeBtn />}
      <FakeBtn />
      <Spacer />
      {started && !isPlaying && generation > 0 ? <StepBackwardBtn /> : <FakeBtn />}
      <PlayPauseBtn />
      {started && !isPlaying ? <StepForwardBtn /> : <FakeBtn />}
      <Spacer />
      <Indicators />
    </div>
  )
}

export default Controls
