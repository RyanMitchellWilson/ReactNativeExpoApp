import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

import Colors from '../Styles/Colors'

interface Props {
  color?: string
  onPress?: () => null
  text: string
}

export default function Button(props: Props) {
  const {color, onPress = () => null, text} = props

  const buttonColor = color === 'blue' ? styles.colorBlue
    : color === 'orange' ? styles.colorOrange
    : styles.colorDefault

  return (
    <TouchableOpacity onPress={onPress} style={{...styles.container, ...buttonColor}}>
      <Text>
        {text.toUpperCase()}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  colorBlue: {
    backgroundColor: Colors.blue
  },
  colorDefault: {
    backgroundColor: Colors.default
  },
  colorOrange: {
    backgroundColor: Colors.orange
  },
  container: {
    borderColor: Colors.black,
    borderRadius: 5,
    borderWidth: 1,
    padding: 5
  }
})