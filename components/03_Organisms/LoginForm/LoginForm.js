import React, { useState } from 'react';
import { View, Text, TextInput, Alert } from "react-native";
import styles from './LoginForm.styling';
import Button from '../../01_Atoms/Button/Button';
import utilities from '../../../settings/utilities';

export default function LoginForm({navigation}) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [alertMessage, setAlertMessage] = useState(''); // if there's an error in the form

    function checkForm(){

        // empty username
        if (username == ''){
            setAlertMessage('Username is required')
        }

        // empty password
        else if (password == ''){
            setAlertMessage('Password is required')
        }

        else{
            setAlertMessage('')
            submitForm()
        }
    }

    function submitForm(){
        const url = new URL("http://localhost:8081/login")
        let data = {
            "username": username,
            "password": password
        }

        // check if there's actually a user

        fetch(url, {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            if (!response.ok) {
                setAlertMessage('No username found')
            } else {
                return response.json();
            }
        })
        .then(data => {
            console.log('Success:', data);
            navigation.navigate('Profile', { user: data._doc })

        })
    }

    return (
        <View style={[styles.LoginForm,utilities.flexCenter]}>
            <Text style={styles.LoginForm__title}>Login Now!</Text>
            <TextInput
                onChangeText={setUsername}
                value={username}
                style={styles.input}
                placeholder="Username"
            />
            <TextInput
                onChangeText={setPassword}
                value={password}
                style={styles.input}
                placeholder="Password"
            />
            <Button title="Submit" onPress={checkForm}/>
            <Text style={styles.alertMessage}>{alertMessage}</Text>
        </View>
    );
}