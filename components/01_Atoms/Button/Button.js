import React from 'react';
import { TouchableOpacity, Text} from "react-native";
import styles from './Button.styling';
import utilities from '../../../settings/utilities';


export default function OurButton({title, onPress, type, disabled}) {

    return (
        <TouchableOpacity disabled={disabled} style={[utilities.flexCenter, disabled ? styles.button_disabled : type == "secondary" ? styles.button_secondary : styles.button, ]} onPress={onPress} >
            <Text style={type == "secondary" ? styles.button__text_secondary : styles.button__text}>{title}</Text>
        </TouchableOpacity>
    );
}