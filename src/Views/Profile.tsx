import React, { Component } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

import Colors from '../Styles/Colors'
import GlobalStyles from '../Styles/GlobalStyles'

export default class Profile extends Component {
  render() {
    const bio = 'Front End and Full-Stack Engineer with 5+ years of experience '
              + 'ranging from mobile app, web app, and infrastructure development. '
              + 'Strong foundation in programming principles across various '
              + 'platforms. Known for the ability to adapt and swiftly master new '
              + 'technologies. Skilled at working as part of a team, as well in a '
              + 'self-directed setting.'

    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../Media/ProfilePic.png')}
            style={styles.image}
          />
        </View>
        <View style={styles.bioContainer}>
          <Text style={styles.name}>Ryan Wilson</Text>
          <Text>{bio}</Text>
        </View>
        <View>
          <Text style={styles.contactTitle}>Contact Info</Text>
          <Text>{'(720) 272-0993'}</Text>
          <Text>{'RyanMitchellWilson@gmail.com'}</Text>
          <Text>{'github.com/RyanMitchellWilson'}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  bioContainer: {
    marginBottom: 20
  },
  contactTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20
  },
  container: {
    ...GlobalStyles.overallContainer,
    padding: 20
  },
  image: {
    borderColor: Colors.orange,
    borderRadius: 100,
    borderWidth: 4,
    height: 200,
    resizeMode: 'contain',
    width: 200
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    textDecorationLine: 'underline'
  }
})