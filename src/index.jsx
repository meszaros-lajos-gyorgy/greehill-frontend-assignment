import 'core-js'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { getStore } from './store/store.js'
import Game from './pages/Game/Game.jsx'
import './reset.scss'

const wrapper = document.getElementById('game')

if (wrapper) {
  ;(async () => {
    const store = await getStore()

    const content = (
      <Provider store={store}>
        <Game />
      </Provider>
    )

    ReactDOM.render(content, wrapper)
  })()
}
