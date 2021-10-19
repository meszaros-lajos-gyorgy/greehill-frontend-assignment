import React from 'react'
import { compose } from 'ramda'
import { hot, setConfig } from 'react-hot-loader'
import { useSelector, useDispatch } from 'react-redux'
import Loading from '../../components/Loading/Loading.jsx'
import { useEffectOnce } from '../../helpers/react.js'
import Grid from '../../components/Grid/Grid.jsx'

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
    generateGrid(5, 5)
    setIsLoading(false)
  })

  return (
    <>
      <h1>Game of Life</h1>
      <Loading visible={isLoading} />

      <Grid />
    </>
  )
}

export default enhance(Game)
