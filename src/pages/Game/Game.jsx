import React, { useEffect, useRef, useState } from 'react'
import { compose } from 'ramda'
import { hot, setConfig } from 'react-hot-loader'
import { useDispatch, useSelector } from 'react-redux'
import { useEffectOnce } from '../../helpers/react.js'
import Grid from '../../components/Grid/Grid.jsx'
import Controls from '../../components/Controls/Controls.jsx'
import s from './style.module.scss'

setConfig({
  reloadHooks: false
})

const enhance = compose(hot(module))

const Game = () => {
  const dispatch = useDispatch()

  const intervalRef = useRef(null)

  const generateGrid = (width, height) => {
    dispatch({
      type: 'Game.generateGrid',
      payload: {
        width,
        height
      }
    })
  }

  const advanceLife = () => {
    dispatch({
      type: 'Game.advanceLife',
      payload: {}
    })
  }

  const started = useSelector((state) => state.Game.started)
  const isPlaying = useSelector((state) => state.Game.isPlaying)
  const speed = useSelector((state) => state.Game.speedInMilliseconds)
  const [speedGuard, setSpeedGuard] = useState(true)

  useEffect(() => {
    if (started === true && isPlaying === true) {
      intervalRef.current = setInterval(() => {
        advanceLife()
      }, speed)
    } else {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }, [started, isPlaying])

  useEffect(() => {
    if (speedGuard) {
      setSpeedGuard(false)
      return
    }
    clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      advanceLife()
    }, speed)
  }, [speed])

  useEffectOnce(() => {
    generateGrid(30, 30)
  })

  return (
    <section className={s.Game}>
      <Grid />
      <Controls />
    </section>
  )
}

export default enhance(Game)
