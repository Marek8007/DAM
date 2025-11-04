import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

export const NoteCard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.note}>
            Note
      </Text>
      <Pressable>
        <Text>
          Button
        </Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#a0824cff',
    },

    note: {
      flex: 0.8,
      backgroundColor: '#f7da9dff',
      margin: 25,
      padding:10,
      borderRadius: 5,
    }

    
})