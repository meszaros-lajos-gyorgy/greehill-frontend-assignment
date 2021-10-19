import React from 'react'
import cn from 'classnames'
import s from './style.module.scss'

const Cell = ({ isAlive }) => {
  return <div className={cn(s.Cell, { [s.alive]: isAlive })} />
}

export default Cell
