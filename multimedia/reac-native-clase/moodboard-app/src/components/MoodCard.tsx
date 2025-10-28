import React from 'react'
import {Text, View, StyleSheet, Pressable} from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";

export const MoodCard = () => {

    return (
        <View style={styles.container}>
                <Text style={styles.emoji}>😃</Text>

            <View style={styles.insideContainer}>
                <Pressable style={({ pressed }) => [
                    styles.button,
                    pressed ? { opacity: 0.7 } : { opacity: 1 }
                ]}>
                    <MaterialCommunityIcons name={"arrow-right-bold-box"} size={65} color={"white"}/>
                </Pressable>

                <Pressable style={({ pressed }) => [
                    styles.button,
                    pressed ? {opacity: 0.7} : {opacity: 1}
                ]}>
                    <MaterialCommunityIcons name={"reload"} size={65} color={"white"}/>
                </Pressable>

            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 0.22,
        backgroundColor: '#caad78ff',
        padding: 25,
        elevation: 25,
        flexDirection: "row",
        paddingTop: 50,
    },

    insideContainer: {
        flex: 1,
        justifyContent: "space-between",
    },

    emoji: {
        marginLeft: 20,
        fontSize: 100,
    },

    button: {
        flex: 1,
        backgroundColor: '#af7947ff',
        marginRight: 20,
        marginBottom: 5,
        marginTop: 10,
        marginLeft: 70,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        elevation: 15,
    },

     dots: {
        fontSize: 40,
        color: "#333"
     }
})

