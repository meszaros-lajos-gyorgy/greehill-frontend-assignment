import React from 'react'
import PlayPauseBtn from '../PlayPauseBtn/PlayPauseBtn.jsx'
import s from './style.module.scss'

const Controls = () => {
  return (
    <div className={s.Controls}>
      <PlayPauseBtn />
      {/* step forward */}
      {/* slider: speed */}
      {/* reset */}
    </div>
  )
}

export default Controls
