import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import s from './style.module.scss'

const Controls = () => {
  return (
    <div className={s.Controls}>
      <button title="Play / Pause" className={s.playPause}>
        <FontAwesomeIcon icon={faPlay} />
      </button>
      {/* step forward */}
      {/* slider: speed */}
      {/* reset */}
    </div>
  )
}

export default Controls
