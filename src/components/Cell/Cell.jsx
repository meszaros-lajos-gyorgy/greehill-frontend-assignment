import React from 'react'
import cn from 'classnames'
import { useDispatch } from 'react-redux'
import s from './style.module.scss'

const Cell = ({ isAlive, x, y }) => {
  const dispatch = useDispatch()

  // TODO: lehessen rajzolni, ne csak kattintani

  const toggleCell = (x, y) => {
    // TODO: ha már elindult a szimuláció, akkor már ne lehessen módosítani
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
