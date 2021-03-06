import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUndo } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'
import cn from 'classnames'
import s from './style.module.scss'

const ResetBtn = () => {
  const dispatch = useDispatch()

  const resetGrid = () => {
    dispatch({
      type: 'Game.resetGrid',
      payload: {}
    })
  }

  return (
    <button
      className={cn(s.ResetBtn)}
      onClick={() => {
        resetGrid()
      }}
    >
      <FontAwesomeIcon icon={faUndo} />
    </button>
  )
}

export default ResetBtn
