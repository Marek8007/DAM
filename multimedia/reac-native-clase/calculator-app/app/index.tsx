import CalculatorButton from '@/component/CalculatorButton'
import ThemeText from '@/component/ThemeText'
import { Colors } from '@/constants/theme'
import { globalStyles } from '@/styles/global-styles'
import React from 'react'
import { Text, View } from 'react-native'

const CalculatorApp = () => {
  return (
    <View style={globalStyles.calculatorContiner}>

     { /* Resultados */}
      <View style={globalStyles.calculatorContiner}>
        <ThemeText variant='h1'>50 x 50</ThemeText>
        <ThemeText variant='h2'>2500</ThemeText >
      </View>

     { /* Botones */}
      <View style={globalStyles.row}>
        <CalculatorButton blackText color={Colors.lightGrey} onPress={() => console.log('C')} label='C'/>
        <CalculatorButton blackText color={Colors.lightGrey} onPress={() => console.log('+/-')} label='+/-'/>
        <CalculatorButton blackText color={Colors.lightGrey} onPress={() => console.log('del')} label='del'/>
        <CalculatorButton color={Colors.orange} onPress={() => console.log('/')} label='/'/>
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton onPress={() => console.log('7')} label='7'/>
        <CalculatorButton onPress={() => console.log('8')} label='8'/>
        <CalculatorButton onPress={() => console.log('9')} label='9'/>
        <CalculatorButton color={Colors.orange} onPress={() => console.log('>')} label='X'/>
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton onPress={() => console.log('4')} label='4'/>
        <CalculatorButton onPress={() => console.log('5')} label='5'/>
        <CalculatorButton onPress={() => console.log('6')} label='6'/>
        <CalculatorButton color={Colors.orange} onPress={() => console.log('-')} label='-'/>
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton onPress={() => console.log('1')} label='1'/>
        <CalculatorButton onPress={() => console.log('2')} label='2'/>
        <CalculatorButton onPress={() => console.log('3')} label='3'/>
        <CalculatorButton color={Colors.orange} onPress={() => console.log('+')} label='+'/>
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton double onPress={() => console.log('0')} label='0'/>
        <CalculatorButton onPress={() => console.log(',')} label=','/>
        <CalculatorButton color={Colors.orange} onPress={() => console.log('=')} label='='/>
      </View>

    </View>

  )
}

export default CalculatorApp