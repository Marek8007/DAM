import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import {useState} from "react";
import FAB from "./components/FAB.tsx"


export default function App() {
    const [count, setCount] = useState(10)


    return (
        <View style={styles.container}>
            <Text>Taqui Taqui Rumba</Text>
            <Text style={styles.textHuge}>{count}</Text>

            <FAB label="+1"
            onPress={() => setCount(count + 1)}
            onLongPress={() => setCount(0)}
            position='right'>
            </FAB>

            <FAB label="-1"
            onPress={() => setCount(count - 1)}
            onLongPress={() => setCount(0)}
            position='left'>
            </FAB>

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

    textHuge: {
        fontSize: 120,
        fontWeight: 'thin'
    },



});
