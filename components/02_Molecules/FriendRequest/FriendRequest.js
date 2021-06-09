import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from "react-native";
import styles from './FriendRequest.styling';
import utilities from '../../../settings/utilities';

import { Icon } from 'react-native-elements'

export default function FriendRequest({ currUser, fromUser }) {
    const [reqHandled, setReqHandled] = useState('');

    const url = new URL("http://localhost:8081/handleRequest")

    function acceptRequest() {
        let data = {
            "userId1": currUser._id,
            "userId2": fromUser._id
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
                setReqHandled('Friend Request Accepted');
            })
    }

    function deleteRequest() {
        let data = {
            "userId1": currUser._id,
            "userId2": fromUser._id
        };

        fetch(url, {
            method: 'DELETE',
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
                setReqHandled('Friend Request Deleted');
            })
    }

    return (
        <View style={styles.friendRequest}>
            <Text style={styles.friendRequest__name}>{reqHandled != '' ? reqHandled : fromUser.name}</Text>
            <View style={styles.friendRequest__icons}>
                {reqHandled == '' ?
                    <>
                        <TouchableOpacity onPress={() => acceptRequest()}>
                            <Icon name="check" type='material-community' color="green" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => deleteRequest()}>
                            <Icon name="close" type='material-community' color="red" />
                        </TouchableOpacity>
                    </>
                    : null
                }

            </View>
        </View>
    );
}