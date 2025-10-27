import {Pressable, StyleSheet, Text} from 'react-native'
import React from 'react'
import {MaterialCommunityIcons} from "@expo/vector-icons";

interface Props{
    label: string;
    position?: 'left' | 'right';
    iconName?: React.ComponentProps<typeof MaterialCommunityIcons>['name'];

    onPress?: () =>  void;
    onLongPress?: () => void;
    iconSize?: number;
    iconColor?: string;
}

export default function FAB({label,position="right", onPress, onLongPress, iconSize=24, iconColor='white', iconName}:Props) {

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

            {iconName?
                <MaterialCommunityIcons name={iconName} size={iconSize} color={iconColor}/>:
                <Text style={{color: 'white'}}>
                    {label}
                </Text>}
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