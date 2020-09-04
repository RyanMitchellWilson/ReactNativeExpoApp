import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import About from '../Views/About'
import ColorSelector from '../Views/ColorSelector'

const Stack = createStackNavigator()

export default function AboutStackNavigator() {
  return (
    <Stack.Navigator initialRouteName="About">
      <Stack.Screen component={About} name="About"/>
      <Stack.Screen
        component={ColorSelector}
        name="ColorSelector"
        options={{ title: 'Color Selector' }}
      />
    </Stack.Navigator>
  )
}