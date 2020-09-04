import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import ExperiencePage from '../Views/ExperiencePage'

const Stack = createStackNavigator()

export default function ExperienceStackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Experience">
      <Stack.Screen name="Experience" component={ExperiencePage} />
    </Stack.Navigator>
  )
}