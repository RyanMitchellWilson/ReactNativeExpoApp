import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { ExperienceInfoInterface } from '../Info/ExperienceInfo'

interface Props {
  info: ExperienceInfoInterface
}

export default function(props: Props) {
  const { info: {
    beginningDate,
    company,
    details,
    endDate,
    location,
    title
  }} = props
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.titleContainer}>
        <Text style={styles.company}>{company}, </Text>
        <Text style={styles.location}>{location}</Text>
      </View>
      <Text style={styles.date}>{`${beginningDate} - ${endDate}`}</Text>
      {
        details.map((detail, key) => {
          return (
            <View style={styles.detail} key={key}>
              <Text>{detail}</Text>
            </View>
          )
        })
      }
    </View>
  )
}

const styles = StyleSheet.create({
  company: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  container: {
    marginBottom: 20
  },
  date: {
    fontSize: 16
  },
  detail: {
    marginBottom: 14,
    marginLeft: 20
  },
  location: {
    fontSize: 20,
    fontStyle: 'italic'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  titleContainer: {
    flexDirection: 'row'
  }
})