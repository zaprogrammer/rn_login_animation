import {StyleSheet, Dimensions} from "react-native";

export const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const homeStyles = StyleSheet.create({
    cardText: {
        fontSize: 16
    },
    input: {
        width: windowWidth * 0.8,
        borderColor: 'rgba(0, 0, 0, 0.6)',
        borderRadius: 10,
        borderWidth: 2,
        padding: 10,
    }
});
