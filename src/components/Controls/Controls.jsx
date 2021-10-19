import React from 'react'
import PlayPauseBtn from './PlayPauseBtn/PlayPauseBtn.jsx'
import ResetBtn from './ResetBtn/ResetBtn.jsx'
import s from './style.module.scss'

const Controls = () => {
  return (
    <div className={s.Controls}>
      <ResetBtn />
      <PlayPauseBtn />
    </div>
  )
}

export default Controls
