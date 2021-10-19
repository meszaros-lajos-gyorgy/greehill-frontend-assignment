import React from 'react'
import { useSelector } from 'react-redux'
import { getSize } from '../../helpers/functions.js'
import Cell from '../Cell/Cell.jsx'
import s from './style.module.scss'

const Grid = () => {
  const grid = useSelector((state) => state.Game.grid)
  const { width, height } = useSelector((state) => getSize(state.Game.grid))

  return (
    <div
      className={s.Grid}
      style={{ gridTemplateColumns: `repeat(${width}, 1fr)`, gridTemplateRows: `repeat(${height}, 1fr)` }}
    >
      {grid.map((row, y) => {
        return row.map((cell, x) => {
          return <Cell key={`cell-${x}-${y}`} isAlive={cell === 1} x={x} y={y} />
        })
      })}
    </div>
  )
}

export default Grid
