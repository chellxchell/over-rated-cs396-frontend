import React, { useState } from 'react';
import { View, Text, TextInput, Alert } from "react-native";
import styles from './LoginForm.styling';
import Button from '../../01_Atoms/Button/Button';
import utilities from '../../../settings/utilities';

export default function LoginForm() {
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
        console.log(username, password)
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