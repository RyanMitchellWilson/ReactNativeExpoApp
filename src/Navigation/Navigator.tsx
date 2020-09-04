import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {Ionicons} from '@expo/vector-icons'
import { NavigationContainer } from '@react-navigation/native'

import AboutStackNavigator from './AboutStackNavigator'
import Colors from '../Styles/Colors'
import ProfileStackNavigator from './ProfileStackNavigator'
import ExperienceStackNavigator from './ExperienceStackNavigator'

const Tab = createBottomTabNavigator()

export default function Navigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='Profile'
        screenOptions={setScreenOptions}
        tabBarOptions={{
          activeTintColor: Colors.blue,
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name='Profile' component={ProfileStackNavigator} />
        <Tab.Screen name='Experience' component={ExperienceStackNavigator} />
        <Tab.Screen name='About' component={AboutStackNavigator} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

// TODO: Properly type this function
function setScreenOptions({ route }: any) {
  return {
    tabBarIcon: ({ color, size }: any) => {
      const iconName = route.name === 'Profile' ? 'md-person'
                     : route.name === 'Experience' ? 'md-book'
                     : route.name === 'About' ? 'ios-information-circle-outline'
                     : ''

      return <Ionicons color={color} name={iconName} size={size} />
    }
  }
}