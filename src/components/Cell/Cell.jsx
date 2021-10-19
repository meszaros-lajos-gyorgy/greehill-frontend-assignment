import React from 'react'
import cn from 'classnames'
import { useDispatch } from 'react-redux'
import s from './style.module.scss'

const Cell = ({ isAlive, x, y }) => {
  const dispatch = useDispatch()

  const toggleCell = (x, y) => {
    dispatch({
      type: 'Game.toggleCell',
      payload: {
        x,
        y
      }
    })
  }

  return (
    <div
      className={cn(s.Cell, { [s.alive]: isAlive })}
      onClick={() => {
        toggleCell(x, y)
      }}
    />
  )
}

export default Cell
