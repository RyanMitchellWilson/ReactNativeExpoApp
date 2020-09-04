import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Profile from '../Views/Profile'

const Stack = createStackNavigator()

export default function ProfileStackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Profile">
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  )
}