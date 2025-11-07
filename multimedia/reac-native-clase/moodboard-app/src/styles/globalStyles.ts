import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    moodContainer: {
        flex: 0.24,
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
        marginLeft: 25,
        fontSize: 100,
    },

    moodButton: {
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
        fontSize: 15,
        color: "#333",
        marginHorizontal: 60,
        fontWeight: 'bold'

    },

    noteContainer: {
        padding: 25,
        flex: 1,
        backgroundColor: '#a0824cff',
    },

    note: {
      flex: 0.8,
      backgroundColor: '#f7da9dff',
      padding:10,
      borderRadius: 5,
    },

    noteNavigation: {
        paddingTop: 20,
        flex: 0.15,
        justifyContent: 'center',
        flexDirection: 'row',
        gap: 10
    },

    noteButton: {
        backgroundColor: '#f0e19eff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        elevation: 15,
    },


})