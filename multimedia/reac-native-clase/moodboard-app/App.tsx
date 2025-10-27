import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {MoodCard} from "./src/components/MoodCard";

export default function App() {
    return (
        <View style={styles.container}>


            <Text>Prueba</Text>
            <MoodCard/>

            <StatusBar style="auto" />
        </View>
    );
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
