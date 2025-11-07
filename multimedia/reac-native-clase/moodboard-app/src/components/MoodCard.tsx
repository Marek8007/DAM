import React from 'react'
import {Text, View, StyleSheet, Pressable} from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import { useMoods } from '../hooks/useMoods';
import { globalStyles } from '../styles/globalStyles';

export const MoodCard = () => {
  const { nextMood, showMood, showDots, resetMood } = useMoods();

    return (
        <View style={globalStyles.moodContainer}>
            <View>
                <Text style={globalStyles.emoji}>{showMood()}</Text>
                <Text style={globalStyles.dots}>{showDots()}</Text>
            </View>


            <View style={globalStyles.insideContainer}>
                <Pressable style={({ pressed }) => [
                    globalStyles.moodButton,
                    pressed ? { opacity: 0.7 } : { opacity: 1 }
                ]}
                onPress={nextMood}>
                    <MaterialCommunityIcons name={"arrow-right-bold-box"} size={65} color={"white"}/>
                </Pressable>

                <Pressable style={({ pressed }) => [
                    globalStyles.moodButton,
                    pressed ? {opacity: 0.7} : {opacity: 1}
                ]}
                onPress={resetMood}>
                    <MaterialCommunityIcons name={"reload"} size={65} color={"white"}/>
                </Pressable>

            </View>
        </View>
    )
}




