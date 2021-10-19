import React from 'react'
import cn from 'classnames'
import { noop } from 'ramda-adjunct'
import s from './style.module.scss'

const Cell = ({ isAlive, onMouseEnter = noop, onMouseDown = noop, onMouseUp = noop }) => {
  return <div className={cn(s.Cell, { [s.alive]: isAlive })} {...{ onMouseEnter, onMouseDown, onMouseUp }} />
}

export default Cell
