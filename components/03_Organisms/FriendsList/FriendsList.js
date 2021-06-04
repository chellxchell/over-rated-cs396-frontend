import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from "react-native";
import styles from './FriendsList.styling';
import { colors } from '../../../settings/colors';
import utilities from '../../../settings/utilities';

export default function FriendsList({setUser}) {
    const [friends, setFriends] = useState([]);
    const url = new URL("http://localhost:8081/users")

    useEffect(() => {
        async function getFriends() {
            let response = await fetch(url);
            response = await response.json()
            setFriends(response["users"])
        }
        getFriends()

    }, []);
    
    return (
        <>
            <View style={styles.friendsHeader}>
                <Text style={styles.friendsHeader__title}>Friends</Text>
            </View>
            
            {friends.map((friend) => (
                <View style={styles.friend}>
                    <TouchableOpacity onPress={()=>setUser(friend)}>
                        <Text style={styles.friend__name}>{friend.name}</Text>
                    </TouchableOpacity>
                </View>
            ))}
        </>
    );
}