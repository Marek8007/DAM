import { View, Text, StyleSheet, Pressable } from 'react-native'
import React, { useState } from 'react'
import { globalStyles } from '../styles/globalStyles'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { TextInput } from 'react-native-paper'
import useNotes from '../hooks/useNotes'

export const NoteCard = () => {
  const [text, setText] = useState("")
  const {returnNote, } = useNotes();

  return (
    <View style={globalStyles.noteContainer}>
      <TextInput
       style={globalStyles.note}
       value={text}
       onBlur={}>
            {returnNote}
      </TextInput>


      <View style={globalStyles.noteNavigation}>

        <Pressable style={[{flex: 0.30}, globalStyles.noteButton]}>
          <MaterialCommunityIcons name={"arrow-left-bold-box"} size={65} color={"#4d2600"}/>
        </Pressable>

        <View style={[{flex: 0.20}, globalStyles.noteButton, {padding: 5}]}>
          <Text>
            Note:  
          </Text>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>
            10/10
          </Text>
        </View>
        
        <Pressable style={[{flex: 0.20}, globalStyles.noteButton]}>
          <MaterialCommunityIcons name={"trash-can-outline"} size={65} color={"#810404ff"}/>
        </Pressable>

        <Pressable style={[{flex: 0.30}, globalStyles.noteButton]}>
          <MaterialCommunityIcons name={"arrow-right-bold-box"} size={65} color={"#4d2600"}/>
        </Pressable>

      </View>
    </View>
  )
}

