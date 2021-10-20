import { indexOf } from 'ramda'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import s from './style.module.scss'

const SpeedControl = () => {
  const dispatch = useDispatch()

  const delaysInMilliseconds = [500, 400, 300, 200, 100]

  const speed = useSelector((state) => indexOf(state.Game.speedInMilliseconds, delaysInMilliseconds) + 1)

  const setSpeed = (speed) => {
    dispatch({
      type: 'Game.setSpeed',
      payload: {
        speedInMilliseconds: delaysInMilliseconds[speed - 1]
      }
    })
  }

  return (
    <div className={s.SpeedControl}>
      <input type="range" min={1} max={5} step={1} value={speed} onChange={(e) => setSpeed(parseInt(e.target.value))} />
    </div>
  )
}

export default SpeedControl
