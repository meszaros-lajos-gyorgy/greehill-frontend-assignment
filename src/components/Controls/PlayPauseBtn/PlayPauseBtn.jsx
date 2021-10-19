import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import cn from 'classnames'
import s from './style.module.scss'

const PlayPauseBtn = () => {
  const dispatch = useDispatch()

  const isPlaying = useSelector((state) => state.Game.isPlaying)
  const togglePlayPause = () => {
    dispatch({
      type: 'Game.togglePlayPause',
      payload: {}
    })
  }

  return (
    <button
      className={cn(s.PlayPauseBtn, isPlaying ? s.playing : s.paused)}
      onClick={() => {
        togglePlayPause()
      }}
    >
      <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
    </button>
  )
}

export default PlayPauseBtn
