import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRandom } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'
import cn from 'classnames'
import s from './style.module.scss'

const RandomizeBtn = () => {
  const dispatch = useDispatch()

  const clearGrid = () => {
    dispatch({
      type: 'Game.randomizeGrid',
      payload: {}
    })
  }

  return (
    <button
      className={cn(s.RandomizeBtn)}
      onClick={() => {
        clearGrid()
      }}
    >
      <FontAwesomeIcon icon={faRandom} />
    </button>
  )
}

export default RandomizeBtn
