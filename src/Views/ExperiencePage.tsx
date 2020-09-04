import React, { Component } from 'react'
import { ScrollView, StyleSheet, Text } from 'react-native'

import GlobalStyles from '../Styles/GlobalStyles'
import Experience from '../Components/Experience'
import { ExperienceInfo } from '../Info/ExperienceInfo'

export default class ExperiencePage extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Experience</Text>
        {
          ExperienceInfo.map((experienceInfo, index) => {
            return <Experience info={experienceInfo} key={index}/>
          })
        }
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    ...GlobalStyles.overallContainer,
    padding: 20
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textDecorationLine: 'underline'
  }
})