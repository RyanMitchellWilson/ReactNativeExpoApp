import React from 'react'
import { Provider } from 'react-redux'

import Main from './src/Views/Main'
import store from './src/Store'

export default function App() {
  return (
    <Provider store={store}>
      <Main/>
    </Provider>
  )
}