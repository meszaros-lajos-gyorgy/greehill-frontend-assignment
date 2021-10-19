import React from 'react'
import { useDispatch } from 'react-redux'
import s from './style.module.scss'

const Controls = () => {
  const dispatch = useDispatch()

  const clearGrid = () => {
    dispatch({
      type: 'Game.clearGrid',
      payload: {}
    })
  }

  return (
    <div className={s.Controls}>
      <button onClick={clearGrid}>clear</button>
    </div>
  )
}

export default Controls
