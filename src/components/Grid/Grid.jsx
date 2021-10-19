import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getGridSize } from '../../helpers/functions.js'
import Cell from '../Cell/Cell.jsx'
import s from './style.module.scss'

const Grid = () => {
  const dispatch = useDispatch()

  const grid = useSelector((state) => state.Game.grid)
  const { width, height } = useSelector((state) => getGridSize(state.Game.grid))

  const [isMouseDown, setIsMouseDown] = useState(false)
  const [mousePos, setMousePos] = useState({ x: null, y: null })

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

  useEffect(() => {
    if (mousePos.x !== null && mousePos.y !== null) {
      toggleCell(mousePos.x, mousePos.y)
    }
  }, [mousePos.x, mousePos.y])

  return (
    <div
      className={s.Grid}
      style={{ gridTemplateColumns: `repeat(${width}, 1fr)`, gridTemplateRows: `repeat(${height}, 1fr)` }}
      onMouseLeave={() => {
        setIsMouseDown(false)
      }}
    >
      {grid.map((row, y) => {
        return row.map((cell, x) => {
          return (
            <Cell
              key={`${x}:${y}`}
              isAlive={cell === 1}
              onMouseDown={() => {
                setIsMouseDown(true)
                setMousePos({ x, y })
              }}
              onMouseUp={() => {
                setIsMouseDown(false)
              }}
              onMouseEnter={() => {
                if (isMouseDown) {
                  if (mousePos.x !== x || mousePos.y !== y) {
                    setMousePos({ x, y })
                  }
                }
              }}
            />
          )
        })
      })}
    </div>
  )
}

export default Grid
