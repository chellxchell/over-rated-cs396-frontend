import React from 'react';
import { TouchableOpacity, Text} from "react-native";
import styles from './Button.styling';
import utilities from '../../../settings/utilities';


export default function OurButton({title, onPress}) {

    return (
        <TouchableOpacity style={[styles.button, utilities.flexCenter]} onPress={onPress} >
            <Text style={styles.button__text}>{title}</Text>
        </TouchableOpacity>
    );
}