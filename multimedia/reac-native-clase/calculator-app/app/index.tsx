import { globalStyles } from '@/styles/global-styles'
import React from 'react'
import { Text, View } from 'react-native'

const CalculatorApp = () => {
  return (
    <View style={globalStyles.calculatorContiner}>
      <Text numberOfLines={1} adjustsFontSizeToFit style={globalStyles.mainResult}>50 x 50</Text>
      <Text style={globalStyles.subResult}>2500</Text>
    </View>
  )
}

export default CalculatorApp