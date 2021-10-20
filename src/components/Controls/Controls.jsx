import React from 'react'
import { useSelector } from 'react-redux'
import { Else, If, Then } from 'react-if'
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
import SpeedControl from './SpeedControl/SpeedControl.jsx'

const Controls = () => {
  const isPlaying = useSelector((state) => state.Game.isPlaying)
  const generation = useSelector((state) => state.Game.generation)
  const started = useSelector((state) => state.Game.started)

  return (
    <div className={s.Controls}>
      <If condition={started}>
        <Then>
          <If condition={isPlaying}>
            <Then>
              <SpeedControl />
            </Then>
            <Else>
              <ResetBtn />
              <FakeBtn />
              <FakeBtn />
            </Else>
          </If>
        </Then>
        <Else>
          <ClearBtn />
          <RandomizeBtn />
          <FakeBtn />
        </Else>
      </If>

      <Spacer />
      {started && !isPlaying && generation > 0 ? <StepBackwardBtn /> : <FakeBtn />}
      <PlayPauseBtn />
      {started && !isPlaying ? <StepForwardBtn /> : <FakeBtn />}
      <Spacer />
      {started ? (
        <Indicators />
      ) : (
        <>
          <FakeBtn />
          <FakeBtn />
          <FakeBtn />
        </>
      )}
    </div>
  )
}

export default Controls
