import CalculatorButton from '@/components/CalculatorButton'
import ThemeText from '@/components/ThemeText'
import { Colors } from '@/constants/theme'
import { globalStyles } from '@/styles/global-styles'
import React from 'react'
import { Text, View } from 'react-native'
import { useCalculator } from '@/hooks/useCalculator'

const CalculatorApp = () => {

  const {formula, buildNumber, clean, toggleSign, deleteLast, previousNumber,
        //  divideOperation, multiplyOperation, substractOperation, addOperation,
         calculateResult, whatevOperator} = useCalculator();

  return (
    <View style={globalStyles.calculatorContiner}>

     { /* Resultados */}
      <View style={globalStyles.calculatorContiner}>
        <ThemeText variant='h1'>{formula}</ThemeText>
        <ThemeText variant='h2'>{previousNumber}</ThemeText >
      </View>

     { /* Botones */}
      <View style={globalStyles.row}>
        <CalculatorButton blackText color={Colors.lightGrey} onPress={clean} label='C'/>
        <CalculatorButton blackText color={Colors.lightGrey} onPress={toggleSign} label='+/-'/>
        <CalculatorButton blackText color={Colors.lightGrey} onPress={deleteLast} label='del'/>
        <CalculatorButton color={Colors.orange} onPress={() => whatevOperator('/')} label='/'/>
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton onPress={() => buildNumber('7')} label='7'/>
        <CalculatorButton onPress={() => buildNumber('8')} label='8'/>
        <CalculatorButton onPress={() => buildNumber('9')} label='9'/>
        <CalculatorButton color={Colors.orange} onPress={() => whatevOperator('x')} label='x'/>
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton onPress={() => buildNumber('4')} label='4'/>
        <CalculatorButton onPress={() => buildNumber('5')} label='5'/>
        <CalculatorButton onPress={() => buildNumber('6')} label='6'/>
        <CalculatorButton color={Colors.orange} onPress={() => whatevOperator('-')} label='-'/>
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton onPress={() => buildNumber('1')} label='1'/>
        <CalculatorButton onPress={() => buildNumber('2')} label='2'/>
        <CalculatorButton onPress={() => buildNumber('3')} label='3'/>
        <CalculatorButton color={Colors.orange} onPress={() => whatevOperator('+')} label='+'/>
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton double onPress={() => buildNumber('0')} label='0'/>
        <CalculatorButton onPress={() => buildNumber('.')} label='.'/>
        <CalculatorButton color={Colors.orange} onPress={calculateResult} label='='/>
      </View>

    </View>

  )
}

export default CalculatorApp