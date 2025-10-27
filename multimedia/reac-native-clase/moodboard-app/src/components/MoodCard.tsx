import React from 'react'
import {Text, View, StyleSheet} from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";

export const MoodCard = () => {




    return (
        <View>
            {/*<MaterialCommunityIcons name='wave' size={300} color='red'/>*/}
            <Text style={styles.emoji}>prueba 😃🙂🫤🙁😭</Text>
        </View>
    )
}


const styles = StyleSheet.create({

    emoji: {
        fontSize: 40,
    },

})

