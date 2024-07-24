import { Platform, StyleSheet } from "react-native"



export const globalStyles = StyleSheet.create({
    centerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
    },
    buttonFAB: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: Platform.OS === 'android' ? 15:0,

    },

})
