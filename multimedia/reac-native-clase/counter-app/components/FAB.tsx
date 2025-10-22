import {Pressable, StyleSheet, Text} from 'react-native'
import React from 'react'

interface Props{
    label: string;
    position?: 'left' | 'right';

    onPress?: () =>  void;
    onLongPress?: () => void;
}

export default function FAB({label,position="right", onPress, onLongPress}:Props) {
    return (
        <Pressable
            style={({ pressed}) => [
                styles.floatingButton,
                position === 'right'? //operador ternario
                    styles.positionRight:
                    styles.positionLeft,
                pressed ? {opacity:0.7}:{opacity:1}
            ]}
            onPress={onPress}
            onLongPress={onLongPress}>

            <Text style={{color: 'white'}}>
                {label}
            </Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    floatingButton: {
        position: 'absolute',
        bottom: 20,
        backgroundColor: '#65558F',
        padding: 20,
        borderRadius: 15,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.3,
        elevation: 3,
        shadowRadius: 4,
    },

    positionRight: {
        right: 20,
    },

    positionLeft: {
        left: 20,
    }
})