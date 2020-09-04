import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux'

import store from './src/Store'
import Navigator from './src/Navigation/Navigator'

export default function App() {
  return (
    <Provider store={store}>
      <Navigator/>
    </Provider>
  )
}