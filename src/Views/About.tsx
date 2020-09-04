import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import Button from '../Components/Button'
import Colors from '../Styles/Colors'
import GlobalStyles from '../Styles/GlobalStyles'

export default class About extends Component<any> {
  render() {
    const {navigation} = this.props
    const description = 'This app is meant to be a form of my resume as well as a '
                      + 'place for me to tinker around. The tabs are the main portion '
                      + 'of my resume while below are some pages of things I am '
                      + 'experimenting with.'

    return (
      <View style={styles.container}>

        <View style={styles.textBoxContainer}>
          <Text style={styles.title}>App Description</Text>
          <Text>{description}</Text>
        </View>

        <View style={styles.textBoxContainer}>
          <Text style={styles.title}>Random Tinkering</Text>
          <Button
            onPress={() => navigation.navigate('ColorSelector')}
            text='Redux Color Selector'
          />
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    ...GlobalStyles.overallContainer,
    padding: 10
  },
  textBoxContainer: {
    marginBottom: 20
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textDecorationLine: 'underline'
  }
})