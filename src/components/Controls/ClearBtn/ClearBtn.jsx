import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEraser } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'
import cn from 'classnames'
import s from './style.module.scss'

const ClearBtn = () => {
  const dispatch = useDispatch()

  const clearGrid = () => {
    dispatch({
      type: 'Game.clearGrid',
      payload: {}
    })
  }

  return (
    <button
      className={cn(s.ClearBtn)}
      onClick={() => {
        clearGrid()
      }}
    >
      <FontAwesomeIcon icon={faEraser} />
    </button>
  )
}

export default ClearBtn
