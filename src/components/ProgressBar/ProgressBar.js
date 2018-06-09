import React from 'react'
import { View, ActivityIndicator, StyleSheet } from 'react-native'
import { colors } from '../../assets/styles/variables'

const ProgressBar = () => (
  <View style={styles.progressBar}>
    <ActivityIndicator size="large" color={colors.brandPrimary} />
  </View>
)

const styles = StyleSheet.create({
  progressBar: {}
})

export default ProgressBar
