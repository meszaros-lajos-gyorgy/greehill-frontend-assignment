import React from 'react'
import { compose } from 'ramda'
import { hot, setConfig } from 'react-hot-loader'
import { useDispatch } from 'react-redux'
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

  const generateGrid = (width, height) => {
    dispatch({
      type: 'Game.generateGrid',
      payload: {
        width,
        height
      }
    })
  }

  useEffectOnce(() => {
    generateGrid(40, 40)
  })

  return (
    <section className={s.Game}>
      <Grid />
      <Controls />
    </section>
  )
}

export default enhance(Game)
