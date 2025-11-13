import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import { globalStyles } from "../styles/globalStyles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TextInput } from "react-native-paper";
import useNotes from "../hooks/useNotes";

export const NoteCard = () => {
  const {
    notes,
    currentNote,
    returnNote,
    saveNote,
    addNote,
    deleteNote,
    nextNote,
    prevNote
  } = useNotes();

  const [text, setText] = useState("");

  return (
    <View style={globalStyles.noteContainer}>
      {/* nota */}
      <TextInput
        style={globalStyles.note}
        value={text !== "" ? text : returnNote}
        placeholder="Escribe una nota..."
        onChangeText={setText}
        onBlur={() => {
          saveNote(text);
          setText("");
        }}
      />

      {/* numero de nota */}
      <View style={{ marginTop: 10, alignItems: "center" }}>
        <Text>
          {notes.length === 0 ? "0/0" : `${currentNote + 1}/${notes.length}`}
        </Text>
      </View>

      <View style={globalStyles.noteNavigation}>


        {/* atrás */}
        <Pressable
          style={[{ flex: 0.3 }, globalStyles.noteButton]}
          onPress={() => {
            saveNote(text)
            prevNote();
            setText("");
          }}>
          <MaterialCommunityIcons
            name="arrow-left-bold-box"
            size={65}
            color="#4d2600"
          />
        </Pressable>

        {/* borrar */}
        <Pressable
          style={[{ flex: 0.2 }, globalStyles.noteButton]}
          onPress={deleteNote}>
          <MaterialCommunityIcons
            name="trash-can-outline"
            size={65}
            color="#810404ff"
          />
        </Pressable>

        {/* next / nueva nota */}
        <Pressable
          style={[{ flex: 0.3 }, globalStyles.noteButton]}
          onPress={() => {
            if (text.trim() !== "") saveNote(text);
            if (currentNote === notes.length - 1) {
              addNote();
            } else {
              nextNote();
            }
            setText("");
          }}>
          <MaterialCommunityIcons
            name={
              currentNote === notes.length - 1
                ? "plus-box"
                : "arrow-right-bold-box"
            }
            size={65}
            color="#4d2600"
          />
        </Pressable>

        
      </View>
    </View>
  );
};
