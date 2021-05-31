
import React, { useState } from 'react';
import { View, Text, TextInput, Alert, TouchableOpacity } from "react-native";
import styles from './ReviewForm.styling';
import utilities from '../../../settings/utilities';
import Button from '../../01_Atoms/Button/Button';

export default function ReviewForm({ visible, setVisible }) {
    const [rating, setRating] = useState('');
    const [comment, setComment] = useState('');

    return (
        <View style={[{ display: visible ? 'block' : 'none' }, styles.reviewForm]}>
            <TextInput
                onChangeText={setRating}
                value={rating}
                style={styles.input}
                placeholder="Rating (1-5)"
            />
            <TextInput
                onChangeText={setComment}
                value={comment}
                style={styles.input}
                placeholder="Leave a comment"
            />
            <Button title="Submit" type="secondary"/>
            <TouchableOpacity onPress={()=>setVisible(false)}>
                <Text>Cancel</Text>
            </TouchableOpacity>
        </View>
    );
}