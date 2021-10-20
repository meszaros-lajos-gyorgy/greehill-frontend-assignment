import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStepBackward } from '@fortawesome/free-solid-svg-icons'
import cn from 'classnames'
import { useDispatch } from 'react-redux'
import s from './style.module.scss'

const StepBackwardBtn = () => {
  const dispatch = useDispatch()

  const recedeLife = () => {
    dispatch({
      type: 'Game.recedeLife',
      payload: {}
    })
  }

  return (
    <button
      className={cn(s.StepBackwardBtn)}
      onClick={() => {
        recedeLife()
      }}
    >
      <FontAwesomeIcon icon={faStepBackward} />
    </button>
  )
}

export default StepBackwardBtn
