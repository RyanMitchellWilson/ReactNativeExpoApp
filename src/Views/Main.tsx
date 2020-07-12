import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'
import { StatusBar } from 'expo-status-bar'

import Button from '../Components/Button'
import Colors from '../Styles/Colors'
import { setBackgroundColor } from '../Actions/AppStyles'

class Main extends Component<any> {
  render() {
    const {AppStyles, dispatch} = this.props

    return (
      <View style={{...styles.container, backgroundColor: AppStyles.backgroundColor}}>
        <StatusBar style="auto" />
        <Text>Press here to change theme</Text>
        <View style={styles.buttonContainer}>
          <Button onPress={() => dispatch(setBackgroundColor(Colors.default))} text='default'/>
          <Button color='blue' onPress={() => dispatch(setBackgroundColor(Colors.blue))} text='blue'/>
          <Button color='orange' onPress={() => dispatch(setBackgroundColor(Colors.orange))} text='orange'/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row'
  },
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  }
})

export default connect((state: any) => state)(Main)