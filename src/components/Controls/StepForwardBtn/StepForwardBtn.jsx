import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStepForward } from '@fortawesome/free-solid-svg-icons'
import cn from 'classnames'
import { useDispatch } from 'react-redux'
import s from './style.module.scss'

const StepForwardBtn = () => {
  const dispatch = useDispatch()

  const advanceLife = () => {
    dispatch({
      type: 'Game.advanceLife',
      payload: {}
    })
  }

  return (
    <button
      className={cn(s.StepForwardBtn)}
      onClick={() => {
        advanceLife()
      }}
    >
      <FontAwesomeIcon icon={faStepForward} />
    </button>
  )
}

export default StepForwardBtn
