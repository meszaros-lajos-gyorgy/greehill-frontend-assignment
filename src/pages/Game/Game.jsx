import React from 'react'
import { compose } from 'ramda'
import { hot, setConfig } from 'react-hot-loader'
import { useSelector, useDispatch } from 'react-redux'
import Loading from '../../components/Loading/Loading.jsx'
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

  const isLoading = useSelector((state) => state.Game.isLoading)
  const setIsLoading = (isLoading) => {
    dispatch({
      type: 'Game.setIsLoading',
      payload: {
        isLoading
      }
    })
  }

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
    generateGrid(30, 30)
    setIsLoading(false)
  })

  return (
    <>
      <Loading visible={isLoading} />
      <section className={s.Game}>
        <Grid />
        <Controls />
      </section>
    </>
  )
}

export default enhance(Game)
