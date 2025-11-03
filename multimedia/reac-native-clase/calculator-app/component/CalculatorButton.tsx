import { Text, Pressable } from 'react-native'
import React from 'react'
import { globalStyles } from '@/styles/global-styles'
import { Colors } from '@/constants/theme';

interface Props {
    label: string;
    color?: string;
    blackText?: boolean;
    onPress: () => void;
    double?: boolean;
}

const CalculatorButton = ({double = false, label, color = Colors.darkGrey, blackText = false, onPress}: Props) => {
  return (
    <Pressable style={({pressed}) => ({
            ...globalStyles.button,
            backgroundColor: color,
            opacity: pressed ? 0.8: 1,
            width: double ? 180 : 80
    })}
    onPress={onPress}>

        <Text style={{
            ...globalStyles.buttonText,
            color: blackText ? 'black' : Colors.textPrimary
        }}>{label}</Text>
    </Pressable>
  )
}

export default CalculatorButton