import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from './SignUpForm.styling';
import Button from '../../01_Atoms/Button/Button';
import utilities from '../../../settings/utilities';

export default function SignUpForm({navigation}) {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [alertMessage, setAlertMessage] = useState(''); // if there's an error in the form

    function checkForm(){
        // if name is empty
        if (name == ''){
            setAlertMessage('Name is required')
        }
        
        // empty username
        else if (username == ''){
            setAlertMessage('Username is required')
        }

        // empty password
        else if (password == ''){
            setAlertMessage('Password is required')
        }
        
        // passwords don't match
        else if (password != confirmPassword){
            setAlertMessage('Passwords must match')
        }

        else{
            setAlertMessage('')
            submitForm()
        }
    }

    function submitForm(){
        console.log(name, username, password, confirmPassword)
    }

    return (
        <View style={[styles.SignUpForm,utilities.flexCenter]}>
            <Text style={styles.SignUpForm__title}>Sign Up Now!</Text>
            <TextInput
                onChangeText={setName}
                value={name}
                style={styles.input}
                placeholder="Name"
            />
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
            <TextInput
                onChangeText={setConfirmPassword}
                value={confirmPassword}
                style={styles.input}
                placeholder="Confirm Password"
            />
            <Button title="Submit" onPress={checkForm}/>
            <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
                <Text>Already have an account? Login</Text>
            </TouchableOpacity>
            <Text style={styles.alertMessage}>{alertMessage}</Text>
        </View>
    );
}