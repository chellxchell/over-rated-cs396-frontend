
import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Alert, TouchableOpacity } from "react-native";
import styles from './ReviewForm.styling';
import utilities from '../../../settings/utilities';
import Button from '../../01_Atoms/Button/Button';

import AppContext from '../../AppContext';

export default function ReviewForm({ visible, setVisible, toUser }) {
    // for global state (who is the current user)
    const myContext = useContext(AppContext);
    const currUser = myContext.user;

    const [alertMessage, setAlertMessage] = useState(''); // if there's an error in the form
    const [rating, setRating] = useState('');
    const [comment, setComment] = useState('');

    // check if any form fields are empty
    function checkForm() {
        // empty value
        if (rating == '' || comment == '') {
            setAlertMessage('Both fields are required')
        }

        else {
            setAlertMessage('')
            submitForm()
        }
    }

// post a new object
function submitForm(){
    const url = new URL("http://localhost:8081/reviews")
    let data = {
        "value" : rating,
        "review" : comment,
        "from" : currUser._id,
        "to" : toUser._id
    };

    fetch(url, {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        console.log(response)
        if (!response.ok) {
            setAlertMessage('Something went wrong')
        } else {
            return response.json();
        }
    })
    .then(data => {
        console.log('Success:', data);
        setVisible(false);
        // navigation.navigate('Profile', { user: data })

    })
    // console.log(name, username, password, confirmPassword)
}

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
            <View style={styles.buttonContainer}>
                <Button title="Submit" type="secondary" onPress={checkForm} />
                <TouchableOpacity onPress={() => setVisible(false)}>
                    <Text>Cancel</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.alertMessage}>{alertMessage}</Text>
        </View>
    );
}