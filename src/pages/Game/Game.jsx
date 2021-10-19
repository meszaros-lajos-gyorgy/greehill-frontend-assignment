import React from 'react'
import { compose } from 'ramda'
import { hot, setConfig } from 'react-hot-loader'
import { useSelector, useDispatch } from 'react-redux'
import Loading from '../../components/Loading/Loading.jsx'
import { useEffectOnce } from '../../helpers/react.js'

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

  useEffectOnce(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  })

  return (
    <>
      <h1>Game of Life</h1>
      <Loading visible={isLoading} />
    </>
  )
}

export default enhance(Game)
