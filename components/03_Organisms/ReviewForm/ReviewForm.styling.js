import { StyleSheet } from 'react-native';
import { colors } from '../../../settings/colors';
import { View, Text } from "react-native";

const ReviewForm = StyleSheet.create({
    reviewForm: {
        position: 'absolute',
        left: '40%',
        top: '35%',
        backgroundColor: 'white',
        zIndex: 100,
        padding: 20,
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.48,
        shadowRadius: 11.95,

        elevation: 18,
    },
    input: {
        height: 40,
        width: '80%',
        marginVertical: 5,
        border: '1px solid gray',
        borderRadius: 5,
        paddingLeft: 10
    },
    buttonContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    alertMessage: {
        color: 'red'
    }
});

export default ReviewForm;