import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {MoodCard} from "./src/components/MoodCard";
import {NoteCard} from "./src/components/NoteCard";
export default function App() {
    return (
        <View style={{flex: 1}}>

            <MoodCard/>
            <NoteCard/>

            <StatusBar style="auto" />
        </View>
    );
}

